import { Router } from "express";
import PaymentMethodController from "../controllers/paymentMethodControllers";
const paymentMethodRouter = Router();


paymentMethodRouter.get('/', PaymentMethodController.getAllpaymentMethod);
paymentMethodRouter.post('/', PaymentMethodController.createpaymentMethod);
paymentMethodRouter.get('/:id',PaymentMethodController.getOnepaymentMethod);
paymentMethodRouter.put('/:id',PaymentMethodController.updatepaymentMethod);
paymentMethodRouter.delete('/:id',PaymentMethodController.deletepaymentMethod);


export default paymentMethodRouter;