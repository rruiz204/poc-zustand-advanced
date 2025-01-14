import { faker } from "@faker-js/faker";
import type { TaskDetail } from "../Models/TaskDetail";

interface FactoryArgs {
  task: string;
};

export class TaskDetailFactory {
  public static build({ task }: FactoryArgs): TaskDetail {
    return {
      task: task,
      user: faker.person.fullName(),
      created: faker.date.between({ from: "2000-01-01", to: Date.now() }),
    };
  };
};