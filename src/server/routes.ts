import { Router } from 'express';
import { WelcomeRoutes } from '../presentation/welcome/welcome.routes';

export class AppRouter {
  public static get routes(): Router {
    const router = Router();
    const apiRouter = Router();

    // apiRouter.use('/categories', CategoriesRoutes.routes);
    // apiRouter.use('/auth', AuthRoutes.routes);
    // apiRouter.use('/assets', AssetsRoutes.routes);
    // apiRouter.use('/upload', FileUploadRoutes.routes);

    router.use('/api/v1', apiRouter);

    apiRouter.use('/hi', WelcomeRoutes.routes);

    return router;
  }
}
