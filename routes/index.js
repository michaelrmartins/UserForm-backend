// O arquivo index.js dentro da pasta rotas consolida todas as rotas em um arquivo

const express = require("express")
const router = express.Router();

// Importing all routes
const routeHome = require('./routeHome')
const routeUsers = require('./routeUsers');
const routeAdmin = require('./routeAdmin');

router.use("/", routeHome);  //home
router.use("/admin", routeAdmin); // Admin Page
router.use("/user", routeUsers); // User Handler


module.exports = router;
