"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("./routes/auth"));
var passport_1 = __importDefault(require("passport"));
var passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
var db = require("./models/index");
var app = express_1.default();
var port = 5000;
var User = require("./models/User");
db();
app.get("/", function (req, res, next) {
    res.send("typescript hello!");
});
app.use("/auth", auth_1.default);
passport_1.default.use(new passport_google_oauth20_1.default.Strategy({
    clientID: "265783923580-f7ba0cf9m9ika3k838h3gsphtgv9d4jn.apps.googleusercontent.com",
    clientSecret: "xYgKN6iXbd796VGUO_hgoARx",
    callbackURL: "http://localhost:3000",
}, function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
    });
}));
app.listen(port);
//# sourceMappingURL=index.js.map