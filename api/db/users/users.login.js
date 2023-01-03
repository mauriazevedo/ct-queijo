const execSQLQuery = require("../connection");

async function Login(email, password, res) {
  const query = `SELECT * FROM users WHERE user_email = '${email}' and  user_password = '${password}'`;

  execSQLQuery(query, res);
}

module.exports = Login;
