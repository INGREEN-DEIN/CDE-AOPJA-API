import { AppRouter } from './server/routes';
import { Server } from './server/server';

(async () => {
  await main();
})();

async function main() {
  const port = (process.env.PORT ? process.env.PORT : 3000) as number;
  const server = new Server({
    port: port,
    routes: AppRouter.routes,
    publicPath: 'public',
  });
  server.start();
}

// import express from 'express';

// (() => {
//   main();
// })();

// function main() {
//   const app = express();

//   const container = Container.setup();

//   app.use(express.json());

//   const controller = container.resolve<WelcomeController>('welcomeController');

//   app.get('/api/v1/hi/igor', controller.greet);

//   app.listen(3000, () => {
//     console.log(`App running on port ${3000}`);
//   });
// }
