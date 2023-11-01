import { Sequelize } from "sequelize-typescript";

const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_DATABASE || !DB_PORT) {
  throw new Error(
    "Environment variables are missing. Make sure to configure DB_USER, DB_PASSWORD, and DB_DATABASE in your .env file."
  );
}

export const database: Sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: Number(DB_PORT),
});
