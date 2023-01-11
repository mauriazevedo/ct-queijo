const execSQLQuery = require("../connection");

function AddOrder(
  userId,
  cheeseAmout,
  dulceDeLecheAmount,
  yogurtAmount,
  deadline,
  res
) {
  const query = `INSERT INTO orders VALUES (null, '${userId}', '${cheeseAmout}', '${dulceDeLecheAmount}', '${yogurtAmount}', '${deadline}', DEFAULT)`;

  execSQLQuery(query, res);
}

module.exports = AddOrder;
