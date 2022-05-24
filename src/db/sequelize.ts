import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import * as mysql from "mysql2";
dotenv.config();

const sequelize = new Sequelize({
  database: process.env["DB_NAME"],
  host: process.env["DB_HOST"],
  password: process.env["DB_PASS"],
  username: process.env["DB_USER"],
  dialect: "mysql",
  dialectModule: mysql,
  models: [__dirname + "/models"],
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf(".model")) === member;
  },
});

export default sequelize;
