import { prisma } from "../../plugins/prisma.js";
import { RegisterInput } from "./auth.schema.js";
import { hashPassword, verifyPassword } from "../../utils/auth/password.util.js";
import { generateAccessToken } from "../../utils/auth/jwt.auth.js";

export const registerUser = async (data: RegisterInput) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });

  const accessToken = generateAccessToken({
    userId: user.id,
  });

  // 5. Return safe response (never include password)
  return {
    accessToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };

  // return { message: "Register service Placeholder", data };
};

export const loginUser = async (data: LoginInput) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user || !user.password) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const isPasswordValid = await verifyPassword(data.password, user.password);

  if (!isPasswordValid) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const accessToken = generateAccessToken({
    userId: user.id,
  });
  
  return {
    accessToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};
