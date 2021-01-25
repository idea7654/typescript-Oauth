"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
module.exports = function () {
    function connect() {
        var connection = mongoose_1.default.connect("mongodb+srv://root:osm980811@cluster0.jb6sv.mongodb.net/User?retryWrites=true&w=majority", {
            dbName: "user",
        }, function (error) {
            if (error) {
                console.log("몽고디비 연결에러");
            }
            else {
                console.log("몽고디비 연결성공!");
            }
        });
    }
    connect();
    mongoose_1.default.connection.on("disconnected", connect);
};
//# sourceMappingURL=index.js.map