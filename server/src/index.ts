import express from "express";
import { Document } from "mongoose";
import bodyParser from "body-parser";
const cors = require("cors");
require("dotenv").config();
const db = require("./models/index");
const app: any = express();
const port: number = 5000;
const session = require("express-session");
import User from "./models/user";
import authRouter from "./routes/auth";

db();

app.use(cors());
app.use(
  session({
    secret: "cyz4.1nc",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());

app.use("/auth", authRouter);

app.listen(port);
