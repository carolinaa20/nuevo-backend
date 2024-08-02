import videogamesModel from "../models/videgamesModel.js";
const videogamesController = {
  createVideogame: async (req, res) => {
    try {
      const newVideogame = new videogamesModel(req.body);
      const createdVideogame = await newVideogame.save();
      res.json({ message: "Videogame created successfully" });
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

  
  getAllvideogames: async (req, res) => {
    try {
      const allvideogames = await videogamesModel.find();
      res.json(allvideogames);
    } catch (error) {
      res.json({
        message:
          "Error. Make sure your server is running and that the APIs url is typed correctly",
      });
    }
  },

  getOnevideogame: async (req, res) => {
    try {
      const videogame = await videogamesModel.findById(req.params.id);
      res.status(200).json(videogame);
    } catch (error) {
      res.json({ message: "Error. Make sure the videogame ID is correct" });
    }
  },

  deletevideogame: async (req, res) => {
    try {
      const videogameToBeDeleted = await videogamesModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "videogame has been removed." });
    } catch (error) {
      res.json({ message: "Error. Make sure the videogame ID is correct" });
    }
  },

  updatevideogame: async (req, res) => {
    try {
      const newInfo = await videogamesModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json({ message: "The videogame has been updated." });
    } catch (error) {
      res.json({
        message:
          "Error. Make sure the videogame ID is correct and you include all the required fields.",
      });
    }
  },
};

export default videogamesController;
