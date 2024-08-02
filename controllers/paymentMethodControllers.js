import paymentMethodModel from "../models/paymentMethodModels.js";
const paymentMethodController = {
    createpaymentMethod: async (req, res) => {
      try {
        const newpaymentMethod = new paymentMethodModel(req.body);
        const createdpaymentMethod = await newpaymentMethod.save();
        res.json({ message: "paymentMethod created successfully" });
      } catch (error) {
        if (error.name === 'ValidationError') {
          // Extract validation error messages
          const errorMessages = Object.values(error.errors).map(err => err.message);
          res.status(400).json({ message: "Validation failed", errors: errorMessages });
        } else {
          res.status(500).json({ message: "An unexpected error occurred" });
        }
      }
    },
  
    
    getAllpaymentMethod: async (req, res) => {
      try {
        const allpaymentMethod = await paymentMethodModel.find();
        res.json(allpaymentMethod);
      } catch (error) {
        res.json({
          message:
            "Error. Make sure your server is running and that the APIs url is typed correctly",
        });
      }
    },
  
    getOnepaymentMethod: async (req, res) => {
      try {
        const paymentMethod = await paymentMethodModel.findById(req.params.id);
        res.status(200).json(paymentMethod);
      } catch (error) {
        res.json({ message: "Error. Make sure the paymentMethod ID is correct" });
      }
    },
  
    deletepaymentMethod: async (req, res) => {
      try {
        const paymentMethodToBeDeleted = await paymentMethodModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "paymentMethod has been removed." });
      } catch (error) {
        res.json({ message: "Error. Make sure the paymentMethod ID is correct" });
      }
    },
  
    updatepaymentMethod: async (req, res) => {
      try {
        const newInfo = await paymentMethodModel.findByIdAndUpdate(
          req.params.id,
          req.body
        );
        res.status(200).json({ message: "The paymentMethod has been updated." });
      } catch (error) {
        res.json({
          message:
            "Error. Make sure the paymentMethod ID is correct and you include all the required fields.",
        });
      }
    },
  };
  
  export default paymentMethodController;
  