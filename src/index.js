require("./env");
const express = require("express");
const Server = require("./server");

const port = parseInt(process.env.PORT, 10);
const httpsPort = parseInt(process.env.HTTPS_PORT, 10);

function routes(app) {
  const allRoute = express.Router();
  allRoute.all("*", (_req, res) => {
    res.end();
  });

  // handle all route
  app.use(allRoute);
}

module.exports = new Server(routes).listen(port, httpsPort);
