"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var cors = require("cors");
require("dotenv").config();
var db = require("./models/index");
var app = express_1.default();
var port = 5000;
var session = require("express-session");
var User = require("./models/User");
//const authRouter = require("./routes/auth");
var auth_1 = __importDefault(require("./routes/auth"));
db();
app.use(cors());
app.use(session({
    secret: "cyz4.1nc",
    resave: false,
    saveUninitialized: true,
}));
passport.serializeUser(function (User, done) {
    done(null, User);
});
passport.deserializeUser(function (obj, done) {
    done(null, obj);
});
app.use("/auth", auth_1.default);
passport.use(new GoogleStrategy({
    clientID: "265783923580-f7ba0cf9m9ika3k838h3gsphtgv9d4jn.apps.googleusercontent.com",
    clientSecret: "xYgKN6iXbd796VGUO_hgoARx",
    callbackURL: "http://localhost:5000/auth/google/callback",
    proxy: true,
}, function (accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, (err: any, user: any) => {
    //   console.log(profile);
    //   return cb(err, user);
    // });
    console.log(profile);
}));
app.listen(port);
//# sourceMappingURL=index.js.map