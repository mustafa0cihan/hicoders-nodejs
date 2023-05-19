import mysql from "mysql2";
import util from "util";

//create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "hicoders",
  password: "hicoders_12",
  database: "Bloggy",
});

// utili async programalama yapabilmek icin kullandik.
db.query = util.promisify(db.query).bind(db);

//connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mysql connected...");
});

export default db;
