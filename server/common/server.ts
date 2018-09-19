import fs from 'fs';
import express, {Application} from 'express';
import http from 'http';
import https from 'https';
import os from 'os';
import cookieParser from 'cookie-parser';
import swaggerify from './swagger';
import l from './logger';

const app = express();
const root = process.cwd();

export default class ExpressServer {
  constructor() {
    app.set('appPath', root + 'client');
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));
  }

  router(routes: (app: Application) => void): ExpressServer {
    swaggerify(app, routes);
    return this;
  }

  listen(port: number = parseInt(process.env.PORT, 10)): Application {
    const welcome = p => () => {
      return l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname() } on port: ${p}}`);
    };

    http.createServer(app).listen(port, welcome(port));
    https.createServer({
      key: fs.readFileSync(process.cwd() + '/cert/key.pem'),
      cert: fs.readFileSync(process.cwd() + '/cert/cert.pem')
    }, app).listen(port + 1, welcome(port + 1));

    return app;
  }
}
