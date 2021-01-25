import mongoose from "mongoose";
module.exports = () => {
  function connect(): void {
    let connection = mongoose.connect(
      "mongodb+srv://root:osm980811@cluster0.jb6sv.mongodb.net/User?retryWrites=true&w=majority",
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
