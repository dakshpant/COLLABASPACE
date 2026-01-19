import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { registerUser } from "./auth.service.js";
import { request } from "node:http";

export const register = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const result = await registerUser(request.body);
  return reply.code(201).send(result);
};
