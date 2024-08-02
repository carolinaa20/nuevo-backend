import { Schema, model } from "mongoose";


const videogamesModel = new Schema({
    name: {
        type: String,
        required:[true,"el nombre del juego es requerido"] ,
        unique: true,
      },
    
      price: {
        type: Number,
        required: [true,"el precio del juego es requerido"] ,
      },
    
      description: 
        {
          type: String,
          required: [true,"la descripcion del juego es requerido"] ,
          unique: true,
        },
      
      image: 
        {
          type: String,
          required:[true,"la imagen del juego es requerida"] ,
        },
      
},
{versionKey:false , timestamps: true}
);


export default model('AVTX videogames', videogamesModel);