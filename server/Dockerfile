FROM node:15.5
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD ["npm", "start"]