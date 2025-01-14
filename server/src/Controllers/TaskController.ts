import type { Request, Response } from "express";
import { TaskFactory } from "../Factories/TaskFactory";
import { TaskDetailFactory } from "../Factories/TaskDetailFactory";

export class TaskController {
  constructor() {
    this.list = this.list.bind(this);
    this.detail = this.detail.bind(this);
  };

  public async list(req: Request, res: Response) {
    const task1 = TaskFactory.build({ title: "task 1" });
    const task2 = TaskFactory.build({ title: "task 2" });
    res.status(200).json({ path: "list", tasks: [task1, task2] });
  };

  public async detail(req: Request, res: Response) {
    const details = TaskDetailFactory.build({ task: req.query.task as string });
    res.status(200).json({ path: "detail", details })
  };
};