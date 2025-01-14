import express from "express";
import { Bootstrap } from "./bootstrap";

const app = express();

const bootstrap = new Bootstrap(app);

bootstrap.addLogging();
bootstrap.addMiddlewares();
bootstrap.addRouters();

app.listen(3000, () => {
  console.log("Server is listening at http://localhost:3000");
});