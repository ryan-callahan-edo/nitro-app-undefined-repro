"use server";
import { createContainer, InjectionMode } from "awilix";
import { ConfigureService } from "./service";

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
  strict: true,
});

container.register({
  ...ConfigureService(),
});

export default container;
