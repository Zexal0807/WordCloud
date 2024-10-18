FROM node:18-alpine
WORKDIR /server

COPY ./index.js /server/index.js
COPY ./package.json /server/

RUN npm install

CMD ["npm", "start"]