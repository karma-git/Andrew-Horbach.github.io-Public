---
id: vagrant
title: About Vagrant
sidebar_position: 3
---
# Vagrant

[Vagrant](https://www.vagrantup.com/) утилита с помощью которой можно быстро и легко поднимать виртуалки.

Устанавливаем:
```shell
brew install vagrant
```

Выбираем нужную ОС на [Vagrant Cloud](https://app.vagrantup.com/boxes/search):

:::info
В терминологии vagrant-а **box** это эквивалент .iso образа
:::

Выполняем в терминале, команду `init` - в результате скачается бокс и появится `Vagrantfile`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="init">
  <TabItem value="init" label="init">

  ``` bash
  vagrant init debian/jessie64
  ```

  </TabItem>

  <TabItem value="ruby" label="Vagrantfile">

  ``` rb
  Vagrant.configure("2") do |config|
    config.vm.box = "debian/jessie64"
    config.vm.hostname = "my-debian"

    config.vm.network :private_network, ip: "192.168.100.10"
    config.vm.network :forwarded_port, guest: 80, host: 8080

    config.vm.synced_folder "./", "/srv/"

    config.vm.provider "virtualbox" do |vb|
      vb.name = "debian"
      vb.memory = "4096"
      vb.cpus = "2"
    end
  end
  ```

  </TabItem>
</Tabs>

Далее можно сделать:
```shell
vagrant up  
vagrant ssh
vagrant destroy
```
