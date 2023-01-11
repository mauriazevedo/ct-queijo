const encryptPassword = require("encrypt-password");

function CreateUsersTable(conn) {
  const sql =
    "CREATE TABLE IF NOT EXISTS users (" +
    "`user_id` INT NOT NULL AUTO_INCREMENT," +
    "`user_name` VARCHAR(32) NOT NULL," +
    "`user_last_name` VARCHAR(128) NOT NULL," +
    "`user_organization` VARCHAR(128) NOT NULL," +
    "`user_email` VARCHAR(128) NOT NULL UNIQUE," +
    "`user_password` VARCHAR(512) NOT NULL," +
    "`user_type` VARCHAR(4) NULL DEFAULT 'user'," +
    "PRIMARY KEY (`user_id`)" +
    ");";

  conn.query(sql, (error, results, fields) => {
    if (error) return console.log("deu pau" + error);
    console.log("Tabela de usuários criada!");
  });

  const password = "admin";
  const hash = encryptPassword(password, {
    min: 1,
    signature: "hs278ty817jsh",
  });

  const query = `INSERT INTO users VALUES (null, 'admin', 'admin', 'admin', 'admin@admin.com', '${hash}', 'admi')`;

  conn.query(query, (error, results, fields) => {
    if (error) return console.log("deu pau" + error);
    console.log("Admin criado!");
  });
}

module.exports = CreateUsersTable;
