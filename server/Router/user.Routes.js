const express = require("express");
const { register } = require("module");
const { userRegister, userLogin } = require("../controllers/User.controllers");
const router = express.Router();


router.post("/userRegister",userRegister)
router.post('/userLogin', userLogin);

module.exports = router;