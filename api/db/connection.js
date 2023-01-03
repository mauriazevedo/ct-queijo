const mysql = require("mysql2");
function execSQLQuery(sqlQry, res, callback) {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "ctqueijo",
  });

  connection.query(sqlQry, (error, results, fields) => {
    if (error) res.json(error);
    else {
      res.json(results);
    }
    connection.end();
  });
}

module.exports = execSQLQuery;
