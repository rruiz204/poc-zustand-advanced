import cors from "cors";
import express from "express";
import type { Express } from "express";

import { ApiRouter } from "./src/Routers/ApiRouter";

export class Bootstrap {
  constructor(private app: Express) {};

  public addRouters() {
    this.app.use("/api", ApiRouter);
  };

  public addMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };
};