const express = require("express");
const router = express.Router();
const { sendMailToUser } = require("../controller/contactController");

//Post method as we are creating and sending a mail
router.post("/contact", sendMailToUser);

module.exports = router;
