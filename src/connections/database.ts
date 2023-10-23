import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_DATABASE) {
  throw new Error("Environment variables are missing. Make sure to configure DB_USER, DB_PASSWORD, and DB_DATABASE in your .env file.");
}

const database = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  
}
);

export default database