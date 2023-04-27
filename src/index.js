require("./env");
const express = require("express");
const log = require("./logger");
const Server = require("./server");

const port = parseInt(process.env.PORT, 10);
const httpsPort = parseInt(process.env.HTTPS_PORT, 10);

class Controller {
  logGet(req, res) {
    log.debug(req.path);
    log.debug(req.query);

    res.json(req.query);
  }

  logPost(req, res) {
    log.debug(req.path);
    log.debug(req.query);
    log.debug(req.body);

    res.json(req.body);
  }
}

const controller = new Controller();

const loggingRouter = express.Router();
loggingRouter.post("/", controller.logPost);
loggingRouter.get("/", controller.logGet);

function routes(app) {
  app.use("/**", loggingRouter);
}

module.exports = new Server(routes).listen(port, httpsPort);
