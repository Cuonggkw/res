require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import apiWebRouter from "./route/api";
import connectDB from "./config/connectDB";

const cors = require("cors");

let app = express();
app.use(cors());

// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apiWebRouter(app);

// config cookie-parser
app.use(cookieParser());

// connectDB();

let port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

(async () => {
  try {
    // test connection.
    await connectDB();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();

// app.use((req, res) => {
//   return res.send("404 not found");
// });

// app.listen(port, () => {
//   console.log("Backend Nodejs is running on the port: " + port);
// });
