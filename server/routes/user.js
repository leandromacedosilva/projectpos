const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
//const clientController = require("../controllers/clientController");

// Create, Find, Update and Delete
router.get("/", userController.view);
router.post("/", userController.find);

// Router
//router.get("", (request, response) => {
//response.render("home");
//});

module.exports = router;
