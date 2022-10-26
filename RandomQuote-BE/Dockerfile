FROM node:18-alpine3.14

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

# RUN npm start
CMD [ "node", "index.js" ]


