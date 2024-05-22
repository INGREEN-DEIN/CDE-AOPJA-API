// import express from "express";
import { Server } from "./presentation/server";

// const app = express();

// app.use(express.json());

// app.get("/hi", async (req, res) => {
//   res.json({ Welcome: "Igor" });
// });

// const server = app.listen(process.env.PORT || 3000, () =>
//   console.log(`
// 🚀 Server ready at: http://localhost:${process.env.PORT}`)
// );

(async () => {
  await main();
})();

async function main() {
  const port = (process.env.PORT ? process.env.PORT : 3000) as number;
  const server = new Server({
    port,
  });
  server.start();
}
