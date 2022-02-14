---
title: CKA
description: начал готовиться к экзамену
slug: cka-commitment
authors: [a.horbach]
tags: [vagrant, linux, docker, devops, k8s, kubernetes]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---
# Certified Kubernetes Administrator (CKA)

Буду краток, у вас мало времени: Certified Kubernetes Administrator [(CKA)](https://www.cncf.io/certification/cka/) один из крутейших сертификатов.

## Articles

Нашел пару хороших ресурсов, чтобы с чего начать:
- [devopscube about CKA](https://devopscube.com/cka-exam-study-guide/) - очень много хороших советов и кросс-ссылок, добавил сайт в закладки
- [medium](https://medium.com/4th-coffee/passing-the-cka-certified-kubernetes-administrator-exam-in-70-minutes-a-detailed-guide-dc945ba4065d) - на контрасте с предыдущей статьей как-то блекло
- [udemy](https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/?ranMID=39197&ranEAID=AfpokvaRFDA&ranSiteID=AfpokvaRFDA-sXs.MeTftBrEzGs26ywPuw&utm_source=aff-campaign&LSNPUBID=AfpokvaRFDA&utm_medium=udemyads) - для визуалов, учитель из 🇮🇳 , курс как всегда лучше брать за 999р, но можно найти и на пиратских ресурсах

## About Exam

Можно использовать:
- Второй монитор
- https://kubernetes.io/*  (да, это вайлдкард, можно читать доку и блог)
- https://github.com/kubernetes/

Говорят проходить [`the hard way`](https://github.com/kelseyhightower/kubernetes-the-hard-way) не обязательно.

| Theme | percentage | comment |
| ----- | ---------- | ------- |
| Cluster Architecture, Installation & Configuration | 25 % | `kubeadm`, Container Runtime Interface (CRI) |
| Workloads & Scheduling | 15 % | `workloads` (configure po,deploy,sts,job,cj,ds and etc.); `nodes` - (drain,cordon,nodeselector,affinity,taint) |
| Services & Networking | 20 % | Container Network Interface (CNI) (networking, connectivity between pods - policy, CoreDNS, etc.) |
| Storage | 10 % | Container Storage Interface (CSI) - sc,pvc,pv - extend pv and etc (?ceph) |
| RBAC | X % | role based access |
| Troubleshooting | 30 % | see spoiler |

<details>
  <summary>Toggle me!</summary>

  - What if a node is not ready?
  - What if a pod is frequently restarting, and you need to figure out why?
  - What if all CPU resource is used up and you need to find out which pod consumes the most and why?
  - How to monitor certain resources?
  - How to troubleshoot a failed component?
  
  :::info
  For example, if you want to monitor the CPU resource each pod uses or each node uses, do you know what keyword to search in the official documentation?
  :::

</details>

## Cluster Architecture, Installation & Configuration

Завел у себя дома кластер, мастер с одним воркером бегут поверх `ubuntu-desktop` моего старого ноутбука (4vcpu, 8gb ram), использую `vagrant+virtualbox`, `containerd` в качестве рантайма (CRI).

Мысль в том, что в любой момент могу с относительно минимальными телодвижениями докинуть воркеров с других компьютеров в домашней сети.

Вот [ссылка](https://github.com/karma-git/playground/tree/master/environment/vagrant/k8s-cluster) на код и схемка.

![img](./static/kubeadm.jpeg)

<!--truncate-->
