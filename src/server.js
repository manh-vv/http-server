const fs = require("fs");
const express = require("express");
const http = require("http");
const https = require("https");
const os = require("os");
const cookieParser = require("cookie-parser");
const pinoHttp = require("pino-http");
const log = require("./logger");

const app = express();

class ExpressServer {
  constructor(routeFn) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(pinoHttp({ logger: log }));

    routeFn(app);
  }

  listen(port, httpsPort) {
    const welcome = (httpType, p) => () => {
      return log.info(
        `Server is up and running in ${
          process.env.NODE_ENV || "development"
        } @: ${os.hostname()} on: ${httpType}://localhost:${p}}`
      );
    };

    http.createServer(app).listen(port, welcome("http", port));
    https
      .createServer(
        {
          key: fs.readFileSync(process.cwd() + "/cert/key.pem"),
          cert: fs.readFileSync(process.cwd() + "/cert/cert.pem"),
        },
        app
      )
      .listen(httpsPort, welcome("https", httpsPort));

    return app;
  }
}

module.exports = ExpressServer;
