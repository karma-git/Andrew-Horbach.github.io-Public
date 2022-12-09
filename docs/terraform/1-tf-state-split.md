---
id: 1-tf-state-split.md
title: State, datasource tf_remote_state
sidebar_position: 1
---

# State, datasource tf_remote_state

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## История, Архитектура

Представим ситуацию, когда у вас есть проект, инфрастуктура для которого провиженится в **aws** c помощью **terraform**. Имеется пачка манифестов:

```shell
├── eks.tf
├── role-cert-manager.tf
├── role-ebs-csi-driver.tf
...
├── main.tf
└── vpc.tf
```

Амбиции пользователей проекта растут и мы добавляем все новые и новые контроллеры в k8s, при этом раздаем им права на aws с помощью IAM ролей. Кажется какие тут могут проблемы?

Проблемы начинают возникать, когда при изменении tf кода план выполняется больше X минут, скажем ~5 мин.

Создавать новый проект не хочется, по причине того, что IAM как бы тесно связаны с eks (cluster oidc endpoint). Как быть?

Один из вариантов - **terraform_remote_state**

Как это выглядит?

## terraform_remote_state

Создаем вложенный подпроект `iam`

```shell {2-5}
├── iam
│   ├── data.tf
│   ├── main.tf
│   ├── role-cert-manager.tf
│   └── role-ebs-csi-driver.tf
├── outputs.tf
├── main.tf
└── vpc.tf
```

Рассмотрим менеджмент манифесты в корневом приложении. Здесь нам важны `outputs.tf`, они попадают в стейт.

### root

<Tabs defaultValue="main.tf">
<TabItem value="main.tf" label="main.tf">

```hcl {17-100}
provider "aws" {
  profile = "mc-project"
  region  = <aws_region>
}

terraform {
  required_version = ">= 1.3.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.42.0"
    }
  }
}

terraform {
  backend "s3" {
    profile        = "mc-mgmt"
    region         = <aws_region>
    bucket         = "mc-terraform-states"
    key            = "project/stage.tfstate"
    dynamodb_table = "mc-terraform-locks"
  }
}
```
</TabItem>

<!--  -->

<TabItem value="outputs.tf" label="outputs.tf">

```hcl
output "team" {
  value = local.team
}

output "stage" {
  value = local.stage
}

output "cluster_oidc_issuer_url" {
  value       = module.eks_cluster.cluster_oidc_issuer_url
  description = "The URL on the EKS cluster for the OpenID Connect identity provider"
}
```
</TabItem>
</Tabs>

Рассмотрим манифесты во вложенном приложении.

### branch (iam)

1. `main.tf` - стейт кладем уже в другой файл
2. `data.tf` - ds берет другой стейт, и может вытаскивать из него объекты типа `output` (если не ошибаюсь, то можно вытащить только этот объект)
3. `role-ebs-csi-driver.tf` - используем `output`-ы из root проекта в своих целях

<Tabs defaultValue="main.tf">
<TabItem value="main.tf" label="main.tf">

```hcl {22}
provider "aws" {
  profile = "mc-project"
  region  = <aws_region>
}

terraform {
  required_version = ">= 1.3.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.42.0"
    }
  }
}

terraform {
  backend "s3" {
    profile        = "mc-mgmt"
    region         = <aws_region>
    bucket         = "mc-terraform-states"
    key            = "project/stage-iam.tfstate"
    dynamodb_table = "mc-terraform-locks"
  }
}
```
</TabItem>

<!--  -->

<TabItem value="data.tf" label="data.tf">

```hcl {7}
data "terraform_remote_state" "this" {
  backend = "s3"
  config = {
    profile = "mc-mgmt"
    region  = <aws_region>
    bucket  = "mc-terraform-states"
    key     = "project/stage.tfstate"
    dynamodb_table = "mc-terraform-locks"
  }
}

```
</TabItem>

<!--  -->

<TabItem value="role-ebs-csi-driver.tf" label="role-ebs-csi-driver.tf">

```hcl {1-4}
locals {
  team  = data.terraform_remote_state.this.outputs.team
  stage = data.terraform_remote_state.this.outputs.stage
  cluster_oidc_issuer_url = replace(data.terraform_remote_state.this.outputs.cluster_oidc_issuer_url, "https://", "")
  ts = "${local.team}-${local.stage}"
}

module "iam_assumable_role_ebs_csi_driver" {
  source  = "terraform-aws-modules/iam/aws//modules/iam-assumable-role-with-oidc"
  version = "4.2.0"

  create_role = true
  role_name   = "${local.ts}-ebs-csi-driver"

  provider_url = local.cluster_oidc_issuer_url

  role_policy_arns = [
    aws_iam_policy.csi_driver.arn
  ]

  oidc_fully_qualified_subjects = [
    "system:serviceaccount:kube-system:ebs-csi-driver"
  ]
}

resource "aws_iam_policy" "csi_driver" {
  name = "${local.ts}-ebs-csi-driver"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:CreateSnapshot",
        "ec2:AttachVolume",
        "ec2:DetachVolume",
        ...
      ],
      "Resource": "*"
    }
  ]
}
EOF
}
```
</TabItem>
</Tabs>


:::info

https://developer.hashicorp.com/terraform/language/state/remote-state-data
https://registry.terraform.io/providers/hashicorp/terraform/latest/docs/data-sources/remote_state

:::
