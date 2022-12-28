const execSQLQuery = require("../connection");

function AddUser(name, lastname, organization, email, password, res) {
  const query = `INSERT INTO users VALUES (null, '${name}', '${lastname}', '${organization}', '${email}', '${password}', DEFAULT)`;

  execSQLQuery(query, res);
}

module.exports = AddUser;
