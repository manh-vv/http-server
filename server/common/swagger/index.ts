import middleware from 'swagger-express-middleware';
import { Application } from 'express';
import path from 'path';

export default function(app: Application, routes: (app: Application) => void) {
  middleware(path.join(__dirname, 'Api.yaml'), app, function(err, mdw) {

    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');

    app.use(mdw.metadata());
    app.use(mdw.files(app, {
      apiPath: process.env.SWAGGER_API_SPEC,
    }));

    app.use(mdw.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    }));

    // These two middleware don't have any options (yet)
    app.use(
      mdw.CORS(),
      mdw.validateRequest());

    // Error handler to display the validation error as HTML
    app.use(function(error, req, res, next) {
      res.status(error.status);
      res.send(
        '<h1>' + error.status + ' Error</h1>' +
        '<pre>' + error.message + '</pre>'
      );
    });

    routes(app);
  });
}
