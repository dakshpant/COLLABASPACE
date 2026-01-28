import { FastifyRequest, FastifyReply } from "fastify";
import { registerUser, loginUser } from "./auth.service.js";
import { loginSchema, registerSchema } from "./auth.schema.js";

export const register = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const parsed = registerSchema.safeParse(request.body);

  if (!parsed.success) {
    return reply.code(400).send({
      error: "VALIDATION_ERROR",
      message: parsed.error,
    });
  }

  try {
    const result = await registerUser(parsed.data);
    return reply.code(201).send(result);
  } catch (error: any) {
    if (error.message === "EMAIL_ALREADY_EXISTS") {
      return reply.code(409).send({
        error: "EMAIL_EXISTS",
        message: "Email already registered",
      });
    }

    throw error;
  }
};

export const login = async (req: FastifyRequest, reply: FastifyReply) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.code(400).send({
      error: "VALIDATION_ERROR",
      message: parsed.error.flatten(),
    });
  }
  try {
    const result = await loginUser(parsed.data);
    return reply.code(200).send(result);
  } catch (error: any) {
    return reply.code(401).send({
      error: "INVALID_CREDENTIALS",
      message: "Invalid email or password",
    });
  }
};
