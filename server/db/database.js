import mongoose from "mongoose";

export function ConnectDB() {
  mongoose
    .connect("mongodb://localhost:27017/trabajo_autonomo")
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
}
