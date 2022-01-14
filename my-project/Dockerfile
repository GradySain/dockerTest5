FROM strapi/base:alpine

WORKDIR ./

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install

COPY . .

ENV NODE_ENV production

RUN npm build

EXPOSE 1337

CMD ["npm", "start"]