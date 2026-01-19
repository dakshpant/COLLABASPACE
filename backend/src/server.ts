import { app } from "./app.js";

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await app.listen({ port: PORT });
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
