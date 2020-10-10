FROM node:14.9.0-alpine
RUN apk add --no-cache curl
RUN apk add --no-cache bash

# Bundle app source
COPY package.json /usr/src/app/
COPY node_modules /usr/src/app/node_modules/
COPY index.js /usr/src/app/

# Start up
WORKDIR /usr/src/app
EXPOSE 80
CMD [ "npm", "start" ]
