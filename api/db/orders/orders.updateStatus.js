const execSQLQuery = require("../connection");

async function UpdateStatus(orderId, newStatus, message, res) {
  const query = `UPDATE orders SET order_status = '${newStatus}', order_return = '${message}' WHERE order_id = '${orderId}'`;

  execSQLQuery(query, res);
}

module.exports = UpdateStatus;
