FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN touch .env

RUN cp .env-example .env

EXPOSE 3333

CMD ["yarn", "start:dev"]