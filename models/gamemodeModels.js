import { Schema, model } from "mongoose";

const gamemodeModel = new Schema({
    name: String,
  },
  {versionKey:false , timestamps: true}
);


export default model('AVTX gamemode', gamemodeModel);