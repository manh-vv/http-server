require("./env");
const Server = require("./server");

const port = parseInt(process.env.PORT, 10);
const httpsPort = parseInt(process.env.HTTPS_PORT, 10);

function routes(_app) {
}

module.exports = new Server(routes).listen(port, httpsPort);
