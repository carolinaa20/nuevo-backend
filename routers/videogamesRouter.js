import { Router } from "express";
import videogamesController from "../controllers/videogamesControllers.js";
const videogamesRouter = Router();


videogamesRouter.get('/', videogamesController.getAllvideogames);
videogamesRouter.post('/', videogamesController.createVideogame);
videogamesRouter.get('/:id',videogamesController.getOnevideogame);
videogamesRouter.put('/:id',videogamesController.updatevideogame);
videogamesRouter.delete('/:id',videogamesController.deletevideogame);


export default videogamesRouter;