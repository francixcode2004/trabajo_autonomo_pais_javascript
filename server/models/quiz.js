import { Schema, model  } from "mongoose";

const QuizSchema = new Schema(
  {
    nombre: { type: String },
    puntaje: { type: Number },
  },
  {
    timestamps: true,
  }
);

export const Quiz = model("Quiz", QuizSchema);

