function CreateProductsTable(conn) {
  const sql =
    "CREATE TABLE IF NOT EXISTS products  (" +
    "`product_id` INT NOT NULL AUTO_INCREMENT," +
    "`product_name` VARCHAR(32) NOT NULL," +
    "PRIMARY KEY (`product_id`)" +
    ");";

  conn.query(sql, (error, results, fields) => {
    if (error) return console.log("deu pau" + error);
    console.log("Tabela de produtos criada!");
  });

  const products = ["Queijo (Kg)", "Iogurte (L)", "Doce de leite (Kg)"];

  products.map((item) => {
    const queryInsertData = `INSERT INTO products VALUES (null, '${item}')`;

    conn.query(queryInsertData, (error, results, fields) => {
      if (error) return console.log("deu pau" + error);
      console.log("Adicionado!");
    });
  });
}

module.exports = CreateProductTable;
