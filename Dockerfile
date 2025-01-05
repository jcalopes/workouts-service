FROM node:20.18.1
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json .
COPY build ./build
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "serve"]
