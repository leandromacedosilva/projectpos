const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
//const clientController = require("../controllers/clientController");

// Create, Find, Update and Delete
router.get("/", userController.view);
router.post("/", userController.find);
router.get("/addinfocardspos", userController.form);
router.post("/addinfocardspos", userController.create);
router.get("/edituser/:id", userController.edit);
// Router
//router.get("", (request, response) => {
//response.render("home");
//});

module.exports = router;
