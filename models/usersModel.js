import { Schema, model } from "mongoose";

const usersModel = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("AVTX user", usersModel);
