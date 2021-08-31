FROM node:14-alpine
WORKDIR /website
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD ["node","src/index.js"]
