import { Router } from "express";
import { TaskController } from "../Controllers/TaskController";

const controller = new TaskController();

export const TaskRouter = Router();

TaskRouter.get("/list", controller.list);
TaskRouter.get("/detail", controller.detail);