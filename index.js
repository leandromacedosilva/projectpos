const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 8888;

let mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "dberpcontrol"
});

mysqlConnection.connect(err => {
  if (!err) console.log("DB connection succeded!");
  else
    console.log(
      "DB connectio failed \n Error: " + JSON.stringify(err, undefined, 2)
    );
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});

// GET all table tabcardspos
app.get("/database", (request, response) => {
  mysqlConnection.query("SELECT * FROM tabcardspos", (err, rows, fields) => {
    if (!err) response.send(rows);
    else console.log(err);
  });
});

// GET an table tabcardspos
app.get("/database/:id", (request, response) => {
  mysqlConnection.query(
    "SELECT * FROM tabcardspos WHERE id = ?",
    [request.params.id],
    (err, rows, fields) => {
      if (!err) response.send(rows);
      else console.log(err);
    }
  );
});

// DELETE an table tabcardspos
app.delete("/database/:id", (request, response) => {
  mysqlConnection.query(
    "DELETE FROM tabcardspos WHERE id = ?",
    [request.params.id],
    (err, rows, fields) => {
      if (!err) response.send("Delete successfully!");
      else console.log(err);
    }
  );
});

// INSERT an table tabcardspos
app.delete("/database", (request, response) => {
  let sql =
    "SET @id = ?; SET @nameoperator = ?; SET @numboxfisic = ?; SET @numboxlogic = ?; SET @valuepos = ?; SET @dateoccurrence = ?; SET @notes = ?; CALL tabcardsposAddOrEdit(@id, @nameoperator, @numboxfisic, @numboxlogic, @valuepos, @dateoccurrence, @notes);";
  mysqlConnection.query(
    "DELETE FROM tabcardspos WHERE id = ?",
    [request.params.id],
    (err, rows, fields) => {
      if (!err) response.send("Delete successfully!");
      else console.log(err);
    }
  );
});

/*app.get('/database', (request, response) => {
  mysqlConnection.query('SELECT * FROM tabcardspos', (err, rows, fields) => {
    if (!err) console.log(rows)
    else console.log(err)
  })
})*/

/*app.get('/database', (request, response) => {
  mysqlConnection.query('SELECT * FROM tabcardspos', (err, rows, fields) => {
    if (!err) console.log(rows[0].id)
    else console.log(err)
  })
})*/
