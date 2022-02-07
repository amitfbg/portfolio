const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const contactRouter = require("./routes/contactRoute");

//applying middleware to make code a bit cleaner
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/", contactRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
