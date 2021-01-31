"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors = require("cors");
require("dotenv").config();
var db = require("./models/index");
var app = express_1.default();
var port = 5000;
var session = require("express-session");
var auth_1 = __importDefault(require("./routes/auth"));
db();
app.use(cors());
app.use(session({
    secret: "cyz4.1nc",
    resave: false,
    saveUninitialized: true,
}));
app.use(body_parser_1.default.json());
app.use("/auth", auth_1.default);
app.listen(port);
//# sourceMappingURL=index.js.map