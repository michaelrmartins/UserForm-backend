const express = require('express')
const router = express.Router();
const queryController = require('../controllers/userController');

//router.get("/", (req, resp) => resp.status(200).send("Rota Usuarios!!"));
router.get("/", queryController.getUsers)
router.post("/", queryController.regUser)

module.exports = router;

