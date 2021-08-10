FROM node:16.6.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@latest

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]