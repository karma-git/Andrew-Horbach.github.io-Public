---
id: k8s-documentary
title: Kubernetes - The Documentary
sidebar_position: 2
---

:::info "long story short"
Open Source is most successful when it's played as a 'positive sum' game.
:::

<details>
<summary>People</summary>

- Tim Hockin - Principal SW Engineer, K8s, GKE, GCP
- Kelsey Hightower - Developer Advocate, GCP
- Brendon Burns - cofounder kubernets
- [Eric Brewer](https://www.linkedin.com/in/eric-brewer-1031254/) | [wiki](https://en.wikipedia.org/wiki/Eric_Brewer_(scientist)) - VP Infrastructure & Google Fellow, Professor at UC Berkeley.

</details>

## :cloud: The 2013

В 2013ом году каждая компания - это интернет компания. Каждая из них находятся под влиянием DevOps методологии, стремится к автоматизации и не хочет иметь дело с `pure` виртуализацией и серверами. Их основная цель - Infrastructure as a Service aka Cloud.

В тоже время AWS уже стал лидером на рынке облачных вычислений. Компании вроде Google и Microsoft тоже хотят выйти на этот рынок, но понимают, что сильно отстают. Google чувствует, что ему необходимо перенести свою экспертизу в облако, необходим некий *геймченджер*.

## :whale: Docker did changed the world

<details>
<summary>dotScale - Solomon Hykes, Docker </summary>

Это очень интересно посмотреть, даже если вы отлично знаете :whale: 

<div class="video-wrapper">
  <iframe  height="540" frameborder="0" allowfullscreen width="100%" src="https://www.youtube.com/embed/3N3n9FzebAA" frameborder="0" allowfullscreen></iframe>
</div>

</details>

Docker - это инструмент, который элегантно решает свою маленькую задачу по упаковке и доставке приложений.

Что касается контейнеров - это не новая технология. О её существовании знали, но это была некая секретная информация, доступная лишь ~ 10% компаний на рынке (Google, Uber, Heroku, etc.). Также остальная часть компаний не умело в High Load в production-е, им было сложно масштабировать приложения.

Docker сделал контейнеры очень простыми и доступными, с возможностью получить моментальную выгоду.

> Ты можешь заниматься приложением и не париться про окружению, запустить приложение локально, в ДЦ, в облаке.

:::note
Docker bridging gap between Dev and Ops.
:::

Docker был обречён на успех. Проблема упаковки и доставки была решена, но что дальше? Как насчет деплоймента и оперирования?

## :boat: Kubernetes - yet another orchestration tool

<details>
<summary>Kelsey Hightower - Kubernetes explanation, Promise Theory</summary>

Давайте представим, что приближаются праздники, и вы хотите отправить подарок близкому человеку. Вы приходите на почту, говорите, что хотите отправить вещи. Вам скажут, что смогут доставить вещи, но в таком виде их можно потерять. Мы не хотим потерять книги, драгоценности или деньги. Поэтому нам нужно положить их в коробку. Расширим аналогию и представим просто конверт. Стоимость отправки конверта из пункта `A` в пункт `Б` будет зависеть от разных факторов: размера, веса и т.д. Но что бы вы ни положили в конверт - почте это не важно.

Ключ к доставке - указание адресата. Как он будет доставлен, с какими сложностями почта может столкнуться при доставке - вас не интересует. Почта абстрагирует вас от этих проблем. Вы просто даёте конверт, говорите адрес, платите деньги и они вам обещают, что доставят его в течении 2-3 дней. Машина может сломаться, доставщик может заболеть, что у годно может случиться, но они обещают, что доставят его за 2-3 дня. Как они это будут делать - не важно. Это `Promise theory`.

Задача Kubernetes-а - убедиться, что приложение работает. Точно так же, как задача почты убедиться, что письмо продолжает следовать к пункту назначения. Kubernetes - абстракция над инфрастуктурой. Разработчикам нужно упаковать свое приложение в коробку, дать адрес, и если они могут позволить себе доставку - приложение будет запущено.

</details>

Kubernetes был бы невозможен без успеха докера.

> У нас есть клауд (компьютер), а как сделать эту машину полезной? Нужна Developers Platform.

Стратегия состояла в том, чтобы сделать новую платформу для облаков, вдохновленную Borg-ом.
Эта технология должна была стать лидером индустрии в своем сегменте (evaluation of `GKE`) для запуска на ней `workloads`, но Google был недостаточно большим, чтобы сделать это в одиночку. Ему было необходимо много *fellow travelers* вокруг этой технологии. Поэтому было принято решение сделать его *open source* проектом.

За работу взялись Brendon, Joe, Ville. У кого-то была экспертиза в облаке, у кого-то в Borg-е. Ребята рассказывали идею коллегам, а получилось обратить на нее внимание одного из VP Google в поездке на автобусе. Некоторое время заняло корпоративное противостояние `за` и `против` *Open Source*.

За некоторое временя до *Dockercon*, который прошел в июне 2013, к проекту подключился Craig из RedHat, один из первых внешних контрибьютеров. Он внес большой вклад в чистоту `Go` кода. Прототип успели подготовить к конференции.

## "Project Seven" - logo, codename 

:::info
Naming is the hardest problem in computer science world:
:::

Однажды, будучи за рулём, Крейг подумал, что kubernetes это `пилот`. Ребята просто подыскали вариант этого [слова на другом языке](https://en.wiktionary.org/wiki/%CE%BA%CF%85%CE%B2%CE%B5%CF%81%CE%BD%CE%AE%CF%84%CE%B7%CF%82).

Дизайнеров Google не ограничивали в создании логотипа (это ведь open source project). Но, в итоге, логотип сделал Тим - у него было образование в дизайне. У руля сделали 7 граней, чтобы не терять связь с кодовым названием проекта.

## Dockercon 2014, k8s announcement

<details>
<summary>Dockercon - Eric Brewer, Kubernetes </summary>

20 June 2014, Eric Brewer (Google).

Это очень интересно посмотреть, даже если вы отлично знаете kubernetes. В этой презентации я нашел лучшее объяснение того, что такое `Pod`

В этот день открылся репозиторий Kubernetes (под лицензией Google).

<div class="video-wrapper">
  <iframe  height="540" frameborder="0" allowfullscreen width="100%" src="https://www.youtube.com/embed/YrxnVKZeqK8" frameborder="0" allowfullscreen></iframe>
</div>

</details>


RedHat с их RedShift подмазались к Google.

RH anoyncement: opensift v3 will be mesos + docker.

Clayton from RH is the first external contributor, refactor to proper Go semantic - this is a start of proeper community working.

В день докеркона - открыли репу с кубернетесом

. It behind the ideas.
> В этот день проанонсили 5-6 других систем оркестрации (проприетарные и опен соурс)

У всех была одна идея (not a brand new idea)

На данном конференции различными компании / стартапы объявили о своим решениях оркестрации контейнеров.

|tool|company|comment|
|----|-------|-------|
|K8s|Google|not simple, not scalable as mesos|
|RedHat|Mesos|powerful|
|libsswarm|Docker|Simple as Possible|
|tupperware|facebook|-|

## Cloud Native Compute Foundation (CNCF)

<!-- Kubernetes - kelsey hightower voice of technology(show what is next, invite to contribute), mc on kubecon -->

<details>
<summary>Kelsey Hightower</summary>
Примерно в это время, инженер Келси Хайтауэр активно помогал другим участникам индустрии разобраться с вопросом: "Что такое k8s"? Это заметили и его пригласили в Google на позицию Developer Advocate. Таким образом Келси стал *голосом* проекта.
</details>

Проблемы до CNCF:
- репозиторий Google
- лицензия проекта - проприетарная от Google

Т.е. то, что k8s - open source проект, лишь какая-то устная договоренность. Многие крупные компании не хотели, чтобы их инженеры работали над проектом конкурента.

Из этих проблем образовался CNCF:
- Организация, предоставляющая интересы многих компаний в отношении облачных технологий.
- Это мост между конкурирующими вендорами, благодаря сотрудничеству которых выигрывает каждый.
- Организовал работу над проектом, которая превращалась в хаос (до этого, на вопросы новых участников о проекте, их отправляли спрашивать к `googler's`). Это положительно сказалось на стратегии развития проекта, это называют *sustainable success*.

:::info
Если бы у Kubernetes и Mesos было свое мнение - они бы нашли, что создавать вместе, например storage для контейнера или будущий StatefulSet.
:::

## Pokemon Go on GKE

![img](../../../static/pokemongo.jpg)

Niantic запустили свою игру на самых первых версиях GKE. Разработчики Kubernetes превратились в 24/7 oncall-support для инфрастуктуры этой игры.

> (тут нужно добавить предложение, из которого понятно, что она рассказывает о том, как они это говорили)'Please stop playing we are not ready for that!' But what was actually amazing is that we were actually ready for that.

Игра росла просто взрывными темпами и благодаря K8s у ребят получилось отскейлиться под исходящую нагрузку. Это был ответ всем, почему K8s.

## Docker vs Kubernetes. Containers wars

:::info
Kubernetes evolution is same exiting as docker. Google is stealing docker's thunder?
:::

Гугл действительно был на войне - он хотел отъесть кусок от рынка облачных вычислений.
Но корпоративные политики не интересуют инженеров open source project. Им просто хочется творить, и делать это максимально хорошо.

:::info
- Everyone want's to own the user experience. 
- Everyone wants to be on top of the value chain.
- Who own the mindset of the engineers - this is very value is.
:::

K8s это: linux + docker runtime + etcd в качестве хранилища. По сути - это коллаборация различных технологий.

:::info
People like drama. World Love Drama.
:::

- 2017 dockercon - solomon сказал, что docker будет поддерживать swarm + k8s, stop war
- В 2017 амазон запустили EKS. De facto standart.

- Kubernetes выиграл благодаря своим контрибьютерам и комьюнити.

:::info
Whatever war people were fighting there was nothing to actually fight.
:::
