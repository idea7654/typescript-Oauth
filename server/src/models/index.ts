import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
module.exports = () => {
  function connect(): void {
    let connection = mongoose.connect(
      MONGO_URI,
      {
        dbName: "user",
      },
      (error) => {
        if (error) {
          console.log("몽고디비 연결에러");
        } else {
          console.log("몽고디비 연결성공!");
        }
      }
    );
  }
  connect();

  mongoose.connection.on("disconnected", connect);

  require("./user");
};
