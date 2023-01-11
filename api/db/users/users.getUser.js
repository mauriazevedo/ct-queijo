const execSQLQuery = require("../connection");

async function GetUser(id, res) {
  const query = `SELECT user_name, user_email, user_organization FROM users WHERE user_id = '${id}'`;

  execSQLQuery(query, res);
}

module.exports = GetUser;
