import {Router, Request, Response, NextFunction} from 'express';
const Heroes = require('../../data');

export class SimpleCrudRouter {
  router: Router;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Heroes);
  }

  /**
   * GET one hero by id
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    const resourceId = req.params.id;
    const resourceName = req.params.col;

    let hero = Heroes.find(hero => hero.id === resourceId);
    if (hero) {
      res.status(200)
          .send({
            message: 'Success',
            status: res.status,
            hero
          });
    }
    else {
      res.status(404)
          .send({
            message: 'No hero found with the given id.',
            status: res.status
          });
    }
  }

  //TODO: finish & test
  public insert(req: Request, res: Response, next: NextFunction) {
    const query = req.params;
    //TODO: do stuff...
  }



  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const intialRouter = new SimpleCrudRouter();
intialRouter.init();

export const simpleCrudRouter =  intialRouter.router;