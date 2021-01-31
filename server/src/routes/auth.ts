import express from "express";
import { OAuth2Client, TokenPayload } from "google-auth-library";
import User from "../models/user";
const router: any = express.Router();
const client = new OAuth2Client(process.env.CLIENT_ID);
router.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json("안녕하세요!");
});

router.post("/google", async (req: express.Request, res: express.Response) => {
  const token: string = req.body.token;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const name = await ticket.getPayload()?.name;
  const email = await ticket.getPayload()?.email;

  const user = await User.findOne({
    email: email,
  });
  if (user) {
    res.status(201).json({ message: "로그인 성공!!" });
  } else {
    const result: any = await User.create({
      email: email,
      name: name,
    });
    res.status(201).json({ result: result });
  }
});

export default router;
