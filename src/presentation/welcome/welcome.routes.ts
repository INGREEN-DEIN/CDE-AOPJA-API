import { Router } from 'express';

import { container } from '../../server/configuration';
import { WelcomeController } from './welcome.controller';

export class WelcomeRoutes {
  static get routes(): Router {
    const router = Router();

    const welcomeController = container.resolve<WelcomeController>('welcomeController');

    router.use('/:name', welcomeController.greet);

    return router;
  }
}
