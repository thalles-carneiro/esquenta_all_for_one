FROM node:alpine

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm install -s

COPY --chown=node:node ./ ./

EXPOSE 3001

ENTRYPOINT npm start