import { Router } from 'express';
import { container } from '../../../../server/configuration';

export class WelcomeRoutes {
  static get routes(): Router {
    const router = Router();

    const welcomeController = container.resolve('welcomeController');
    console.log(welcomeController);

    router.use('/:name', welcomeController.greet);

    return router;
  }
}
