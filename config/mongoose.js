import mongoose from "mongoose";


const url = "mongodb+srv://dianacarolinaa2024:juego@baseav.lqprta8.mongodb.net/?retryWrites=true&w=majority&appName=baseAV"
mongoose.connect(url)
 .then((data)=>console.log('Connection with MongoDB is OK'))
 .catch((error)=> console.log('Connection with MongoDB failed.'))