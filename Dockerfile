FROM node:16-alpine AS development

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

ENV REST_USERNAME_Cajamag=info@smartfit.com.co \
    REST_PASSWORD_Cajamag=4iB[M245SYy6 \
    REST_GRANT_TYPE_Cajamag=password \
    REST_ENDPOINT_TOKEN_Cajamag=https://apim.cajamag.com.co/api/login \
    REST_ENDPOINT_USER_Cajamag=https://apim.cajamag.com.co/api/v1/afiliadoGeneral \
    API_TOKEN=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDliZDQzNGUxMGNmOGYzNzU4ODMzNzg2MjBjZmI4YmQxMTczNzI1ZmJjYTZjMzVkNGE4YWQ1NWQ4NDg3ZjZmNWI5MmM3YmYxZDk1ZDM3N2JiN2YiLCJpYXQiOjE2OTc3NTI2ODQuODcwMzA2LCJuYmYiOjE2OTc3NTI2ODQuODcwMzA4LCJleHAiOjE3MjkzNzUwODQuODUyMzQ1LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.Ayk-uQYgZVxiylC_ARbaOG_OP_qfquGTOe-dtunMOXBZ4bZpzP1p2Ius9_C1IMO058kFwkyHT9TsGVwSVoKfqNAuTZhs43MlkendWnlwVgAkK7y8RCIb4YNwAUJnP8yVXSB04KPlFm4D8Gi4N49l_gCpXKNzOjYdqNv9WXfE1UzWAB5YRJtHpyOTmWga91iVTMz_dk6p3c99_ONaXjY80UvLTocuVmgjCUOOy_gAIWnNtVrnj9x0JdX80LKPD2iylD2yIlpxrt_5Nz1vZiGf8DPZrbEDPjqt-EQlyubOnSsHNhZvBJBtvAwWxitLOBcCajMK_2dC4okbUzHebWbfbFfIpGfeQYBKXgcuICRYewmEC-hypVDpJf8Sch5Qsua0j-epxDXB5-UjhCo9sgV7mv7uP_oLtzT7Aw9amefZSCj1okva672Yl1JUvNy1Lfw5EVVXGNzOEDXlg8MGpdi9aea18AJgWUTSFs_HLJZTSWnfYnlZGaXj5FtLGjfIAWz1pz3tYh4Q29p1qWLWutBcZzQqSqmNcsEwdQfo9SJI-do_0cES9pmxiQ0PQQpCEjVj-sbzy6SZClWjzPEPUOjp4ecW3I5h23HdilOC6zlUhZ0v1v5IzVACjjnzzUAphoUfeXcO36sbgfkU8rU3_9VY0A1Ey3ZfVlVmPI6q0D4vyKc

RUN npm run build

FROM node:16-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]