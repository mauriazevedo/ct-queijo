const execSQLQuery = require("../connection");

async function GetUser(id, res) {
  const query = `SELECT * FROM users WHERE user_id = '${id}'`;

  execSQLQuery(query, res);
}

module.exports = GetUser;
