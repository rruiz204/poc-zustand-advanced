import { Router } from "express";
import { TaskRouter } from "./TaskRouter";
import type { Request, Response } from "express";

export const ApiRouter = Router();

ApiRouter.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ ping: "pong" });
});

ApiRouter.use("/task", TaskRouter);