FROM node:12-slim

EXPOSE 8080

RUN npm install -g typescript ts-node ts-node-dev

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

WORKDIR /home/node/api

USER node

COPY --chown=node:node package*.json yarn*.lock ./

RUN yarn

COPY --chown=node:node . .

USER root

# ENTRYPOINT [ "./init.sh" ]