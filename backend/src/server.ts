import { app } from "./app.js";
import { hashPassword, verifyPassword } from "./utils/auth/password.util.js";

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await app.listen({ port: PORT });
    console.log(`Server is running at http://localhost:${PORT}`);
    //pass.utils sanity check
    const hashed = await hashPassword("test123");
    console.log("Hashed:", hashed);
    const isValid = await verifyPassword("test123", hashed);
    console.log("Password valid:", isValid);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
