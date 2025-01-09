import { Cow } from "../models/Cow";
import { faker } from "@faker-js/faker";

const generate = (): Cow => {
  return {
    code: faker.string.uuid(),
    race: faker.animal.cow(),
    color: faker.color.human(),
  };
};

export const CowService = Object.freeze({ generate });