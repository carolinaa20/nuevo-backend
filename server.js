import "./config/mongoose.js"
import express from "express";
import videogamesRouter from "./routers/videogamesRouter.js";
import usersRouter from "./routers/usersRouters.js";
import cors from "cors";

const app = express()
const PORT = 3000;


app.get('/', (req, res)=>{
  res.send('Hi from the root.')
})
app.use(express.json());
app.use(cors());
app.use("/videogames",videogamesRouter)
app.use("/users",usersRouter)

app.listen(PORT, ()=>{
  console.log(`Listening from port ${PORT}`)
})