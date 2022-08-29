// Router
//router.get("", (request, response) => {
//response.render("home");
//});
const mysql = require("mysql");

// Connection pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// View Users
exports.view = (request, response) => {
  //response.render("home");

  // Connectio to DB
  pool.getConnection((err, connection) => {
    if (err) throw err; // Not connected!
    console.log("Connected as ID " + connection.threadId);

    //let searchTerm = request.body.search;

    // User the connection
    //connection.query("SELECT * FROM tabcardspos", (err, rows) => {
    connection.query(
      "SELECT * FROM tabcardspos WHERE status = 'active'",
      (err, rows) => {
        /*connection.query(
      "SELECT * FROM tabcardspos WHERE nameoperator LIKE ?",
      (err, rows) => {*/
        // When done with connection, release it
        connection.release();

        if (!err) {
          response.render("home", { rows });
        } else {
          console.log(err);
        }
        console.log("The data from user table: \n", rows);
      }
    );
  });
};

// Find User by Search
exports.find = (request, response) => {
  // Connectio to DB
  pool.getConnection((err, connection) => {
    if (err) throw err; // Not connected!
    console.log("Connected as ID " + connection.threadId);

    let searchTerm = request.body.search;

    // User the connection
    //connection.query("SELECT * FROM tabcardspos", (err, rows) => {
    /*connection.query(
      "SELECT * FROM tabcardspos WHERE status = 'active'",
      (err, rows) => {*/
    connection.query(
      "SELECT * FROM tabcardspos WHERE nameoperator LIKE ? OR numboxfisic LIKE ?",
      ["%" + searchTerm + "%", "%" + searchTerm + "%"],
      (err, rows) => {
        // When done with connection, release it
        connection.release();

        if (!err) {
          response.render("home", { rows });
        } else {
          console.log(err);
        }
        console.log("The data from user table: \n", rows);
      }
    );
  });
};
