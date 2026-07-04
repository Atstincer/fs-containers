FROM node:24 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run test

FROM node:24

WORKDIR /usr/src/app

COPY --from=test-stage /usr/src/app /usr/src/app

ENV VITE_BACKEND_URL=http://localhost:3000

CMD ["npm", "run", "dev", "--", "--host"]
