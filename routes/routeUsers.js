const express = require('express')
const router = express.Router();
const queryController = require('../controllers/userController');

//router.get("/", (req, resp) => resp.status(200).send("Rota Usuarios!!"));
router.get("/", queryController.getUsers)

module.exports = router;

