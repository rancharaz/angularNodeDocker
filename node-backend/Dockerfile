FROM node:14
#not app in docker folder
WORKDIR /app

COPY package*.json ./

RUN npm install

#copy all that
COPY . .

CMD ["node", "index.js"]