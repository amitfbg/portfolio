const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
const nodemailer = require("nodemailer");
app.use(cors());

const route = express.Router();

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: env.EMAIL,
    pass: env.PASSWORD,
  },
  secure: true,
});

const mailData = {
  from: "youremail@gmail.com", // sender address
  to: "myfriend@gmail.com", // list of receivers
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: `<b>Hey there! </b>
             <br> This is our first message sent with Nodemailer<br/>`,
};

//applying middleware to make code a bit cleaner
app.use("/contact", route);
route.post("/", (req, res) => {
  res.status(200).send({ msg: "HELLO" });
});

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
