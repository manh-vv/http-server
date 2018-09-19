import {Request, Response} from 'express';
import {logger} from '../../../common/logger';

export class Controller {

  logGet(req: Request, res: Response): void {
    logger.debug(req.path);
    logger.debug(req.query);

    res.json(req.query);
  }

  logPost(req: Request, res: Response): void {
    logger.debug(req.path);
    logger.debug(req.query);
    logger.debug(req.body);

    res.json(req.body);
  }
}

export default new Controller();
