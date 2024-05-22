import express from "express";

interface ServerOptions {
  port: number;
}
export class Server {
  private app = express();
  private port: number;
  private serverListener?: any;
  constructor(options: ServerOptions) {
    const { port } = options;
    this.port = port;
  }

  public start() {
    this.app.use(express.json());

    this.app.get("/hi", async (req, res) => {
      res.json({ Welcome: "Igor" });
    });

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`🚀 Server ready at: http://localhost:${this.port}`);
    });
  }

  public close() {
    this.serverListener?.close();
  }
}
