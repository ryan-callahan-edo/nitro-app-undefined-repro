"use server";
import { asClass, createContainer, InjectionMode } from "awilix";
import { Service } from "./service";

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
  strict: true,
});

container.register({
  serivice: asClass(Service).singleton(),
});

export default container;
