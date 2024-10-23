require("dotenv").config();
import jwt from "jsonwebtoken";

const securePath = ["/login", "/logout"];

const createJWT = (payload) => {
  let key = process.env.JWT_SECRET;
  let token = null;
  try {
    token = jwt.sign(payload, key, { expiresIn: process.env.JWT_EXPIRE });
  } catch (error) {
    console.log(error);
  }
  return token;
};

const verifyToken = (token) => {
  let key = process.env.JWT_SECRET;
  let decoded = null;
  try {
    decoded = jwt.verify(token, key);
    console.log(decoded);
  } catch (error) {
    console.log(error);
  }
  return decoded;
};

// const extractToken = (req) => {
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.split(" ")[0] === "Bearer"
//   ) {
//     return req.headers.authorization.split(" ")[1];
//   }
//   return null;
// };

const checkUserJWT = (req, res, next) => {
  if (securePath.includes(req.path)) return next();

  setTimeout(() => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
    }

    next();
  }, 3000);
};

module.exports = { createJWT, verifyToken, checkUserJWT };
