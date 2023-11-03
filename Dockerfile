
FROM node:20-alpine

##RUN apk update && apk add --no-cache curl

## Se instala demonio para proceso
RUN npm i pm2 -g

WORKDIR /app

COPY package*.json ./

RUN npm install

# RUN npm audit fix --force

COPY . .

EXPOSE ${EXPOSE_PORT}

CMD [ "npm","run","startProd"]
# CMD [ "npm","run","dev"]