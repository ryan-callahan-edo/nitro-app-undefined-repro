"use server";
import { asClass, createContainer, InjectionMode } from "awilix";

class Service {
  add(left: number, right: number) {
    return left + right;
  }
}

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
  strict: true,
});

container.register({
  service: asClass(Service).singleton(),
});

export default container;
