import express from "express";
import authRouter from "./routes/auth";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
require("dotenv").config();
const db = require("./models/index");
const app: express.Application = express();
const port: number = 5000;
const User = require("./models/User");

db();

app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("typescript hello!");
  }
);

app.use("/auth", authRouter);

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID:
        "265783923580-f7ba0cf9m9ika3k838h3gsphtgv9d4jn.apps.googleusercontent.com",
      clientSecret: "xYgKN6iXbd796VGUO_hgoARx",
      callbackURL: "http://localhost:3000",
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
      User.findOrCreate({ googleId: profile.id }, (err: any, user: any) => {
        return cb(err, user);
      });
    }
  )
);

app.listen(port);
