import express from "express";
import passport from "passport";
const router: any = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json("안녕하세요!");
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] }),
  (req: express.Request, res: express.Response) => {
    console.log(req);
  }
);

router.get(
  "/google/callback",
  passport.authenticate(
    "google",
    {
      successRedirect: "http://localhost:3000",
      failureRedirect: "/auth/google/failed",
    },
    (req: express.Request, res: express.Response) => {
      console.log(req);
    }
  )
);

router.get("/google/failed", (req: express.Request, res: express.Response) => {
  res.redirect("http://127.0.0.1:3000");
});

export default router;
