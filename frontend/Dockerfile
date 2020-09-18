FROM node:12-slim

EXPOSE 8080

WORKDIR /home/app

COPY package*.json yarn*.lock ./

RUN yarn
RUN yarn add global react-scripts@3.4.1 -g 

COPY . .

CMD [ "yarn", "start" ]