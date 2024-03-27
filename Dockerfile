FROM node:20.12-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN yarn

# Bundle app source
COPY src src
COPY cert cert

RUN ls -l

ENV APP_ID=http-server
ENV NODE_ENV=development
ENV PORT=80
ENV HTTPS_PORT=443
ENV LOG_LEVEL=debug
ENV SESSION_SECRET=mySecret

EXPOSE 80
EXPOSE 443

CMD [ "yarn", "docker:start" ]
