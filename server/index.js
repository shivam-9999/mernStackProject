const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

dotenv.config({ path: "./.env" });

const authRoutes = require("./routes/auth");
const { db } = require("./models/User");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const DB = process.env.DATABASE;

//app
const app = express();

//db
mongoose
  .connect(DB)
  .then(() => console.log("connection successfully"))
  .catch((err) => console.log(err));

//middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
})

//routes middleware
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// command used

// -> for file inside directory instead of touch
// type null > your_file.txt
// type null > config.env
