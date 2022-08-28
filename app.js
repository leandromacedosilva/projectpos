const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const { application } = require("express");
//const { application, response } = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Static Files
app.use(express.static("public"));

// Templating Engine
//app.engine("hbs", exphbs({ extname: ".hbs" })); // version 5.3.4
//app.set("view engine", "hbs"); // version 5.3.4

// Update to 6.0.0
const handlebars = exphbs.create({ extname: ".hbs" });
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

// Router
app.get("", (request, response) => {
  response.render("home");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
