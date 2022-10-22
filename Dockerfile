FROM alpine:3.14

RUN apk add \
  nodejs~=14 \
  yarn~=1.22 \
  && yarn install

RUN addgroup --gid 10001 app \
  && adduser \
  --uid 10001 \
  --home /home/app \
  --shell /bin/ash \
  --ingroup app \
  --disabled-password \
  app

COPY ./ /home/app

WORKDIR /home/app

RUN yarn install

USER app

EXPOSE 3000

ENTRYPOINT [ "/usr/bin/yarn" ]
CMD [ "start" ]
