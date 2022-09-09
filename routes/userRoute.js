const res = require('express/lib/response');
const userController = require("../controllers/userController")
const router = require('express').Router();

router.post("/", userController.signUp);

module.exports = router;