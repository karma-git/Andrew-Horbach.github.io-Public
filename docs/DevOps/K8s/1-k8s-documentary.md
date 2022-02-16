---
id: k8s-documentary
title: k8s-documentary
sidebar_position: 2
---

# K8s Long Story Short

# Peoples
- Tim Hockin - Principal SW Engineer, K8s, GKE, GCP
- Kelsey Hightower - Developer Advocate, GCP
- Brendon Burns - cofounder kubernets

# part 1

## Тезисы

00:09 - Tim Hockin - The reason is why the cloud is so important around 2013 is because every company is an internet company.

## 2013

В 2013ом году каждая компания - это интернет компания. Компании находятся под влиянием DevOps методологии, хотят автоматизации и не хотят иметь дела с виртуализацией и серверами. Компании хотят Infrastructure as a Service aka Cloud.



- Sillicon Valley в 2013 году находится под влиянием DevOps, для автамотизации людя не хотят иметь дела с виртуализацией и серверами. А хотят Infrastructure is a service aka cloud.
- AWS по части облачных технологий далеко обогнал  конкурентов, таких как как гугл и microsoft, они не знают как его догнать.
- Гугл ищет как перенести собственную экспертизу в облако

## dotscale conf 2013. Docker did changed the world.

Docker catch engineers heartss and minds

- what is docker, wtf is doing docker, why it is a big deal?

Соломон Хайкс рассказывает про докер, про контейнеры, про новую эру в разработке и доставке по и то что за этим стоит крутые возможности.

> Существовало множество ЯП и фреймворков, вопрос как небольшим компаниям научиться выливать это в продакшен и держать там большие нагрузки? (Это доступно только большим компаниям типа Google, Uber) - Это идея за докером
> 
> До докера многие знали о существовании контейнеров, но это был некий секретный стаф недоступный 90% инженеров (но крупнейшие компании уже использовали это google (Borg - батя кубернетеса), heroku).

Docker сделал контейнеры очень простыми, очень доступными с возможность получить моментальную выгоду.

Ты можешь заниматься приложением и не париться про ОС, запустить локально, в ДЦ, в клауде.

DOcker - soultion of application packaging problem and making this accesible.

Docker bridging gap between dev and ops.

Docker потерпел успех, но что дальше, как нам это деплоить?
> Докер суперски решает свою маленькую задачу, но требуется еще больше: нужен новый путь организации, опирирования и управляния workloads

> K. HTower containers explanation, promise theory:

Let's say the holidays are coming up and you want to ship something to a loved one as a present. So let's invent a post office and post ofice says we can ship thing, but we don't want to bring loose things. We don't want to loose books and jewellery and money. No-no. You need to put in a box. So ife we extend this analogy let's put an envelope. Now there's going to be a cost for me to move this envelope from one place to another, and depending of how fat is is and how much it weighs, I'm gonna give you a price. You can think about that like your stamp. Now whatever you put inside of it is up to you.

Now the key is you now have to describe where it needs to go. We need to put an address on it. Where doest it run, who's destined for and how long you would like to take, or are willing to wait for it to get there.

And So if you think about it the post office abstract all that away from you. You show up with your envelope and your stamp and address and they tell you, well this will get there in two or three days.
Plains,cars can break down. But noone from post office calls you when this things happen. They make a promise to you, they promise that this letter will get there in two days. How they do it is not a concern.

Promise theory.

Kubernetes work is to make sure that application is running, like post office job is to make sure that letter is keep moving until it gets to its destanation. Kubernetes is an abstraction for infrastructure. developers have to put their app in the box, give us address and if they can afford the postage, we'll run application for them.

---

Kubernetes был невозможен без успеха докера.

У нас есть клауд (компьютер), ок, как сделать эту машину полезной? Нужна Developers platform.

Idea - создать borg - like system in a way the applies to cloud.

Решили сделать платформу для деплоя, вдохновленную боргом as a open source project. Цель создать технологию типа GKE - индустриального лидера для running workloads, но вокруг этой технологии нужно сконцентрировать внимание всего tech-world.
> Angry birds example.

## prototype
Brendon, Joe and Ville - работали над ним, у каждого было свое видение как оно должно выглядеть.
Mountain View (Borg) Center starting to communicate with Seattle (cloud) center постоянно.

- Bus ride talk about k8s - it's to precious to be open source, Но один VP все понял - k8s can shift agend of cloud to Google (но гугл один не сможет это потянуть, он недостаточно большей). To pull this agend - you have to have a lot of fellow travelers.

- Общение в двумя VP по поводу open source - один играл в телефон

## Dockercon 2014 аноунсмент

Пара незанятных разработчиков Go, Declarative layer on top of docker (Kubelet?)

## Naming, prototype < 7M9 >

Nameing is the hardest problem in computer sience world:

Craig is driving, steering the wheel and  - maybe we should use some other language for "pilot"

Ancient greek - Kubernetes.
Tim hockin - degree в дизайне сделали лого, и график команда - it's open source we don't care, just do the logo.

# Part 2

Moral of this story:

Sara: Open SOurce is most successful when it's played as a postivie sum game.

## 2014 dockercon june 10th

RedHat с их RedShift подмазались к Google.

RH anoyncement: opensift v3 will be mesos + docker.

Clayton from RH is the first external contributor, refactor to proper Go semantic - this is a start of proeper community working.

В день докер кона - открыли репу с кубернетесом

Kubernetes - yet another orchestration thing on top of docker. It behind the ideas.
> В этот день проанонсили 5-6 других систем оркестрации (проприетарные и опен соурс)

У всех была одна идея (not a brand new idea)

facebook - tupperware
heroku
docker swarm (libsswarm) - cluster is one big computer, enitial expirience as easy as possible, simple
mesos - крутой scheduler, powerful (Chosen by apply, netflix, aribnb)

kubernetes - kelsey hightower voice of technology(show what is next, invite to contribute), mc on kubecon

Kubernetes (evolution) is same exiting as docker. Google is stealing docker's thunder.

Google is in a war about cloud.

Corporate politics above an open source project. Но инженеры которые работают над проектом - вне политики, они просто хотят делать вещи хорошо.

## CNCF (2015 june kubecon)

Репо гугла, лицензия гугла (Open SOurce is just a promise). Многие большие компании не хотели чтобы их инженеры участвовали в проекте под лицензией гугла.

CNCF - multi vendor interests group

CNCF - bridge with our competitive.

Если бы у Kubernetes было свое мнение и у Mesos - они бы нашли что создавать вместе, например storage для контейнера (Stateful).

2016-2017 проект не организован, как эта штука работает? Пойди спроси у googlers.

## way we are stuctured - sustainable success

CNCF - столкнулся с проблемой, как принимать решения по развитию проекта.
24 / 7.

## 1.0 in prod (Pokemon Go GKE) Niantic
Разработчки kube - 24/7 on call support for Pokemon Go.

> Please stop playing we are not ready for that. But that was amazing, was we actually were ready for that.

Игра росла просто нереально и это и был ответ всем, почему кубернетес крут.

## Docker vs Kubernetes - Container wars

Everyone want's to own the user experience. Everyone wants to be on top of the value chain.
Who own the mindset of the engineers - this is very value is.

Zero-sum game.

Kubernetes : linux + docker runtime + etcd for storage (it's a bit collabaration with technoloiges).

People like drama. World Love Drama.

2017 dockercon - solomon сказал что docker будет поддерживать swarm + k8s, stop war

В 2017 амазон запустили EKS. De facto standart.

Kubernetes выиграл благодаря контрибьютерам.

Whatever war people were fighting there was nothing to actually fight.
