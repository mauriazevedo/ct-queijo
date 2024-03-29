const mysql = require("mysql2");
const CreateOrdersTable = require("./orders/orders.createTable");
const CreateUsersTable = require("./users/users.createTable");

async function Initialize() {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "ctqueijo",
  });

  CreateUsersTable(connection);
  CreateOrdersTable(connection);
}

module.exports = Initialize;
