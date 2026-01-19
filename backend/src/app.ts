import fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import dotenv from "dotenv";

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
