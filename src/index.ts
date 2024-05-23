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
