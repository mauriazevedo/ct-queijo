const execSQLQuery = require("../connection");

function AddOrder(
  userId,
  cheeseAmout,
  dulceDeLecheAmount,
  yogurtAmount,
  deadline,
  reason,
  res
) {
  const query = `INSERT INTO orders VALUES (null, '${userId}', '${cheeseAmout}', '${dulceDeLecheAmount}', '${yogurtAmount}', '${deadline}', '${reason}', DEFAULT, DEFAULT)`;

  execSQLQuery(query, res);
}

module.exports = AddOrder;
