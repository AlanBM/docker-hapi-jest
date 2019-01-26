FROM node:latest

MAINTAINER alanbm

ENV NODE_ENV=dev
ENV PORT=3000

COPY . /src
WORKDIR /src

RUN npm install && npm install --dev

EXPOSE $PORT

CMD [ "npm", "start" ]