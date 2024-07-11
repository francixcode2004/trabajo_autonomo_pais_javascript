import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import {ConnectDB} from "./db/database.js";
import {Quiz} from "./models/quiz.js";
dotenv.config();
ConnectDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("client"));
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html");
});
app.post("/api/quiz", async (req, res) => {
  try {
    const { nombre, puntaje } = req.body;
    const newquiz = new Quiz({
      nombre,
      puntaje,
    });
    await newquiz.save();
    res.status(201).json({ message: "puntaje guardado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
