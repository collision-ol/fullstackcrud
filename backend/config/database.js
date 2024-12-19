import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "olanolanolan", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
