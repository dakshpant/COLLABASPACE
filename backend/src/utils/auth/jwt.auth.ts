import jwt from "jsonwebtoken";

const jwt_secret = process.env.JWT_SECRET as string;

if (!jwt_secret) {
  throw new Error("JWT_SECRET is not defined");
}

type AccessTokenPayload = {
  userId: string;
};

export const generateAccessToken = (payload: AccessTokenPayload): string => {
  return jwt.sign(payload, jwt_secret, {
    //standaed Industry Standard rest managed by refresh token
    expiresIn: "15m",
  });
};
