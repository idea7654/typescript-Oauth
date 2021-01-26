import express from "express";
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const cors = require("cors");
require("dotenv").config();
const db = require("./models/index");
const app: any = express();
const port: number = 5000;
const session = require("express-session");
const User = require("./models/User");
//const authRouter = require("./routes/auth");
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

passport.serializeUser(function (User: any, done: any) {
  done(null, User);
});

passport.deserializeUser(function (obj: any, done: any) {
  done(null, obj);
});

app.use("/auth", authRouter);

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "265783923580-f7ba0cf9m9ika3k838h3gsphtgv9d4jn.apps.googleusercontent.com",
      clientSecret: "xYgKN6iXbd796VGUO_hgoARx",
      callbackURL: "http://localhost:5000/auth/google/callback",
      proxy: true,
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
      // User.findOrCreate({ googleId: profile.id }, (err: any, user: any) => {
      //   console.log(profile);
      //   return cb(err, user);
      // });
      console.log(profile);
    }
  )
);

app.listen(port);
