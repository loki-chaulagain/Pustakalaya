import app from "./app";
import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import { AppDataSource } from "./db";

const port = process.env.PORT || 5000;

async function main() {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Database connected successfully");
      app.listen(port);
      console.log("Server running on port", port);
    })
    .catch((error) => console.log("Error while connecting to database!", error));
}

main();
