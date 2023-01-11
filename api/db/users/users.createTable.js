function CreateUsersTable(conn) {
  const sql =
    "CREATE TABLE IF NOT EXISTS users (" +
    "`user_id` INT NOT NULL AUTO_INCREMENT," +
    "`user_name` VARCHAR(32) NOT NULL," +
    "`user_last_name` VARCHAR(128) NOT NULL," +
    "`user_organization` VARCHAR(128) NOT NULL," +
    "`user_email` VARCHAR(128) NOT NULL UNIQUE," +
    "`user_passwod` VARCHAR(512) NOT NULL," +
    "`user_type` VARCHAR(4) NULL DEFAULT 'user'," +
    "PRIMARY KEY (`user_id`)" +
    ");";

  conn.query(sql, (error, results, fields) => {
    if (error) return console.log("deu pau" + error);
    console.log("Tabela de usuários criada!");
  });
}
