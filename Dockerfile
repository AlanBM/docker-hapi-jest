FROM node:latest

MAINTAINER abustamante

ENV NODE_ENV=production
ENV PORT=3000

ADD . /src
WORKDIR /src

RUN npm install

EXPOSE $PORT
