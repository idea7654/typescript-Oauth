"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("passport"));
var router = express_1.default.Router();
router.get("/", function (req, res) {
    res.status(200).json("안녕하세요!");
});
router.get("/google", passport_1.default.authenticate("google", { scope: ["profile"] }), function (req, res) {
    console.log(req);
});
router.get("/google/callback", passport_1.default.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/auth/google/failed",
}, function (req, res) {
    console.log(req);
}));
router.get("/google/failed", function (req, res) {
    res.redirect("http://127.0.0.1:3000");
});
exports.default = router;
//# sourceMappingURL=auth.js.map