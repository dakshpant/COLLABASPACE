import fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import dotenv from "dotenv";
import prismaPlugin from "./plugins/prisma.js";
import { authRoutes } from "./modules/auth/auth.routes.js";

// Dotenv
dotenv.config();

// Fastify app config
export const app = fastify({
  logger: true,
});

// Cors config
app.register(cors, {
  origin: true,
  credentials: true,
});

//Cookie config
app.register(cookie);
app.register(prismaPlugin);

//test route
app.get("/health", async () => {
  return { status: "ok" };
});
// Auth routes
app.register(authRoutes, { prefix: "/api/auth" });
