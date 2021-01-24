"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import http from 'http';
var app = express_1.default();
var port = 3000;
app.get("/", function (req, res, next) {
    res.send("typescript hello!");
});
app.listen(port);
//# sourceMappingURL=index.js.map