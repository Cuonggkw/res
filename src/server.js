require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import apiWebRouter from "./route/api";
import connectDB from "./config/connectDB";

const cors = require("cors");

let app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apiWebRouter(app);

// config cookie-parser
app.use(cookieParser());

connectDB();

const port = process.env.PORT || 3306;

// app.use((req, res) => {
//   return res.send("404 not found");
// });

app.listen(port, () => {
  console.log("Backend Nodejs is running on the port: " + port);
});
