import express from "express";
//import http from 'http';
const app: express.Application = express();
const port: number = 3000;
app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("typescript hello!");
  }
);

app.listen(port);
