import { Router } from "express";
import usersController from "../controllers/usersControllers.js";
const usersRouter = Router();


usersRouter.get('/', usersController.getAllusers);
usersRouter.post('/', usersController.createusers);
usersRouter.get('/:id',usersController.getOneusers);
usersRouter.put('/:id',usersController.updateusers);
usersRouter.delete('/:id',usersController.deleteusers);


export default usersRouter;