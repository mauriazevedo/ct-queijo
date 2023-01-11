function CreateOrdersTable(conn) {
  const sql =
    "CREATE TABLE IF NOT EXISTS orders (" +
    "`order_id` INT NOT NULL AUTO_INCREMENT," +
    "`fk_user_id` INT NOT NULL," +
    "`order_cheese_amount` INT NOT NULL," +
    "`order_dulce_de_lechet_amount` INT NOT NULL," +
    "`order_yougurt_amount` INT NOT NULL," +
    "`order_deadline_datetime` DATETIME NOT NULL," +
    "`order_reason` MEDIUMTEXT NOT NULL," +
    "`order_return` MEDIUMTEXT DEFAULT NULL," +
    "`order_status` VARCHAR(45) NOT NULL DEFAULT 'under_review'," +
    "PRIMARY KEY (`order_id`)," +
    "CONSTRAINT `fk_user_id`" +
    " FOREIGN KEY (`fk_user_id`)" +
    " REFERENCES `ctqueijo`.`users` (`user_id`)" +
    " ON DELETE NO ACTION" +
    " ON UPDATE NO ACTION" +
    ");";

  conn.query(sql, (error, results, fields) => {
    if (error) return console.log("deu pau" + error);
    console.log("Tabela de pedidos criada!");
  });
}

module.exports = CreateOrdersTable;
