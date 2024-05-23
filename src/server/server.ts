import express, { Router } from 'express';
import { Server as HttpServer } from 'http';
import { MiddlewareManager, StaticFileManager } from './configuration';
interface ServerOptions {
  port: number;
  routes: Router;
  publicPath: string;
}

export class Server {
  public readonly app = express();
  private serverListener?: HttpServer;
  private port: number;
  private readonly routes: Router;
  private readonly publicPath: string;

  constructor(options: ServerOptions) {
    const { port, routes, publicPath = 'public' } = options;
    this.port = port;
    this.routes = routes;
    this.publicPath = publicPath;
  }

  public start() {
    this.app.use(this.routes);

    MiddlewareManager.setup(this.app);
    StaticFileManager.setup(this.app, this.publicPath);

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`🚀 Server ready at: http://localhost:${this.port}`);
    });
  }

  public close() {
    this.serverListener?.close();
  }
}
