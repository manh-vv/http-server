FROM node:8.10-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
RUN npm install --only=production

# Bundle app source
COPY . .

RUN ls -l

EXPOSE 8080
EXPOSE 8081

CMD [ "yarn", "docker:start" ]
