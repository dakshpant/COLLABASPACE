import { FastifyInstance } from "fastify";
import { register, login } from "./auth.controller.js";

export async function authRoutes(app: FastifyInstance) {
  app.post("/register", register);
  app.post("/login", login)
}