const nodemailer = require("nodemailer");
require("dotenv").config();

//Using Nodemailer to do send the mail
exports.sendMailToUser = (req, res) => {
  const data = req.body;
  if (
    Object.keys(data).length < 3 ||
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.status(400).json({ msg: "Please fill all fields!" });
  }

  const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailOption = {
    from: "contactamitfbg@gmail.com",
    to: "amitfbg02@gmail.com",
    subject: `Mail from ${data.name} `,
    html: `<b>Hey there! </b>
            <br> ${data.message}<br/>`,
  };

  transporter.sendMail(mailOption, (error) => {
    try {
      if (error)
        return res
          .status(535)
          .json({ msg: "Username and Password not accepted" });
      return res.status(200).send({ msg: "Thank you for contacting..." });
    } catch (err) {
      return res.status(500).json({ msg: "Server Error!" });
    }
  });
};
