FROM node:14.9.0-alpine3.10
WORKDIR /usr/src/app
RUN npm install --save prop-types
RUN npm install -g create-react-app
