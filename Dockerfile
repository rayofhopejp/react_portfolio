FROM node:14.9.0-alpine3.10
WORKDIR /usr/src/app
RUN cd react_portfolio && npm install