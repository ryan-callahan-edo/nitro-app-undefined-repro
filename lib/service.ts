"use server";
import { asClass } from "awilix";

class Service {
  add(left: number, right: number) {
    return left + right;
  }
}

export function ConfigureService() {
  return { service: asClass(Service).singleton() };
}
