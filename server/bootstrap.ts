import cors from "cors";
import express from "express";
import { ApiRouter } from "./src/Routers/ApiRouter";
import { LoggerService } from "./src/Services/LoggerService";
import type { Express, Request, Response, NextFunction } from "express";

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

  public addLogging() {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      LoggerService.info(`${req.method} ${req.url}`);
      next();
    });
  };
};