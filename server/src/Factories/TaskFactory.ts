import { faker } from "@faker-js/faker";
import type { Task } from "../Models/Task";

interface FactoryArgs {
  title: string;
};

export class TaskFactory {
  public static build({ title }: FactoryArgs): Task {
    return {
      id: faker.number.int(),
      title: title,
      descrption: faker.lorem.paragraph(),
    };
  };
};