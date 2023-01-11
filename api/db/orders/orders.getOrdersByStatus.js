const execSQLQuery = require("../connection");

async function GetOrdersByStatus(status, res) {
  const query = `SELECT * FROM orders WHERE order_status = '${status}'`;

  execSQLQuery(query, res);
}

module.exports = GetOrdersByStatus;
