const execSQLQuery = require("../connection");

async function GetOrders(id, res) {
  const query = `SELECT * FROM orders WHERE fk_user_id = '${id}'`;

  execSQLQuery(query, res);
}

module.exports = GetOrders;
