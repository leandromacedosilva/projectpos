// Router
//router.get("", (request, response) => {
//response.render("home");
//});
const { request } = require("express");
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
      "SELECT * FROM tbcardspos WHERE statusreg = 'Ativo'",
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
    // First query
    //connection.query("SELECT * FROM tabcardspos", (err, rows) => {
    /*connection.query(
      "SELECT * FROM tabcardspos WHERE status = 'active'",
      (err, rows) => {
    // Second query
    connection.query(
      "SELECT * FROM tabcardspos WHERE nameoperator LIKE ? OR numboxfisic LIKE ?",
      ["%" + searchTerm + "%", "%" + searchTerm + "%"],
      (err, rows) => {*/
    // Default query connection 1
    /*connection.query(
      "SELECT d.id, d.nameoperator, d.numboxfisic, d.numboxlogic, d.valuepos, d.id_tabcardsflags, f.nameflag FROM tabcardspos d inner join tabcardsflags f on d.id_tabcardsflags = f.id WHERE nameoperator LIKE ? OR numboxfisic LIKE ?",
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
};*/
    // Default query connection 2
    connection.query(
      "SELECT d.id, d.nameoperator, d.numboxfisic, d.numboxlogic, d.valuepos, d.cardpos, d.dateregister, d.statusreg FROM tbcardspos d WHERE nameoperator LIKE ? OR numboxfisic LIKE ?",
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
exports.form = (request, response) => {
  response.render("add-inf-cards-pos");
};

// Add new informations of cards pos
exports.create = (request, response) => {
  //response.render("add-inf-cards-pos");
  const {
    nameoperator,
    numboxfisic,
    numboxlogic,
    valuepos,
    cardpos,
    dateregister,
    dateoccurrence,
    statusreg,
    notes
  } = request.body;
  pool.getConnection((err, connection) => {
    if (err) throw err; // Not connected!
    console.log("Connected as ID " + connection.threadId);

    let searchTerm = request.body.search;

    // User the connection
    // First query
    //connection.query("SELECT * FROM tabcardspos", (err, rows) => {
    /*connection.query(
      "SELECT * FROM tabcardspos WHERE status = 'active'",
      (err, rows) => {
    // Second query
    connection.query(
      "SELECT * FROM tabcardspos WHERE nameoperator LIKE ? OR numboxfisic LIKE ?",
      ["%" + searchTerm + "%", "%" + searchTerm + "%"],
      (err, rows) => {*/
    // Default query connection
    connection.query(
      "INSERT INTO tbcardspos SET nameoperator = ?, numboxfisic = ?, numboxlogic = ?, valuepos = ?, cardpos = ?, dateregister = ?, dateoccurrence = ?, statusreg = ?, notes = ?",
      [
        nameoperator,
        numboxfisic,
        numboxlogic,
        valuepos,
        cardpos,
        dateregister,
        dateoccurrence,
        statusreg,
        notes
      ],
      (err, rows) => {
        // When done with connection, release it
        connection.release();

        if (!err) {
          response.render("add-inf-cards-pos", {
            alert: "Information added successfully!"
          });
        } else {
          console.log(err);
        }
        console.log("The data from user table: \n", rows);
      }
    );
  });
};
