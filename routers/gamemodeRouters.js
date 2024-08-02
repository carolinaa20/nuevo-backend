import { Router } from "express";
import gamemodeController from "../controllers/gamemodeControllers";
const gamemodeRouter = Router();


gamemodeRouter.get('/', gamemodeController.getAllgamemode);
gamemodeRouter.post('/', gamemodeController.creategamemode);
gamemodeRouter.get('/:id',gamemodeController.getOnegamemode);
gamemodeRouter.put('/:id',gamemodeController.updategamemode);
gamemodeRouter.delete('/:id',gamemodeController.deletegamemode);


export default gamemodeRouter;