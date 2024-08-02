import { Schema, model } from "mongoose";
const paymentMethodModel = new Schema({
  name: String,
},
{versionKey:false , timestamps: true}
);

export default model('AVTX paymentMethod', paymentMethodModel);
