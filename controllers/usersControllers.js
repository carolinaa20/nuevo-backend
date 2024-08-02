import bcrypt from 'bcrypt'; // encrypter
import usersModel from "../models/usersModel.js";
const usersController = {
  createusers: async (req, res) => {
    try {
      const { firstname, lastname, email, password, age } = new usersModel(req.body);
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new usersModel({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        age
      });
      const createdusers = await newUser.save();
      res.json({ message: "users created successfully" });
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


  getAllusers: async (req, res) => {
    try {
      const allusers = await usersModel.find();
      res.json(allusers);
    } catch (error) {
      res.json({
        message:
          "Error. Make sure your server is running and that the APIs url is typed correctly",
      });
    }
  },

  getOneusers: async (req, res) => {
    try {
      const users = await usersModel.findById(req.params.id);
      res.status(200).json(users);
    } catch (error) {
      res.json({ message: "Error. Make sure the users ID is correct" });
    }
  },

  deleteusers: async (req, res) => {
    try {
      const usersToBeDeleted = await usersModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "users has been removed." });
    } catch (error) {
      res.json({ message: "Error. Make sure the users ID is correct" });
    }
  },

  updateusers: async (req, res) => {
    try {
      const newInfo = await usersModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json({ message: "The users has been updated." });
    } catch (error) {
      res.json({
        message:
          "Error. Make sure the users ID is correct and you include all the required fields.",
      });
    }
  },
};

export default usersController;