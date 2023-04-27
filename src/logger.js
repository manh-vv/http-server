const pino = require("pino");

const logger = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
});

module.exports = logger;
