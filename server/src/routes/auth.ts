import express from "express";
import passport from "passport";
const router: express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json("안녕하세요!");
});

router.get(
  "/login",
  passport.authenticate("local"),
  (req: express.Request, res: express.Response) => {
    passport.authenticate("google", { scope: ["profile"] });
  }
);

router.get(
  "/login/callback",
  passport.authenticate(
    "google",
    {
      failureRedirect: "/login",
    },
    (req: express.Request, res: express.Response) => {
      res.redirect("/");
    }
  )
);

export default router;
