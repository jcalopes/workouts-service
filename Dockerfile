FROM node:20.18.1
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json ./
RUN npm install
COPY src/ .
EXPOSE 3000
CMD [ "npm", "start"]
