import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_DATABASE) {
  throw new Error("Environment variables are missing. Make sure to configure DB_USER, DB_PASSWORD, and DB_DATABASE in your .env file.");
}

const database = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

export default database;
