import gamemodeModel from "../models/gamemodeModels.js";
const gamemodeController = {
  creategamemode: async (req, res) => {
    try {
      const newgamemode = new gamemodeModel(req.body);
      const createdgamemode = await newgamemode.save();
      res.json({ message: "gamemode created successfully" });
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

  
  getAllgamemode: async (req, res) => {
    try {
      const allgamemode = await gamemodeModel.find();
      res.json(allgamemode);
    } catch (error) {
      res.json({
        message:
          "Error. Make sure your server is running and that the APIs url is typed correctly",
      });
    }
  },

  getOnegamemode: async (req, res) => {
    try {
      const gamemode = await gamemodeModel.findById(req.params.id);
      res.status(200).json(gamemode);
    } catch (error) {
      res.json({ message: "Error. Make sure the gamemode ID is correct" });
    }
  },

  deletegamemode: async (req, res) => {
    try {
      const gamemodeToBeDeleted = await gamemodeModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "gamemode has been removed." });
    } catch (error) {
      res.json({ message: "Error. Make sure the gamemode ID is correct" });
    }
  },

  updategamemode: async (req, res) => {
    try {
      const newInfo = await gamemodeModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json({ message: "The gamemode has been updated." });
    } catch (error) {
      res.json({
        message:
          "Error. Make sure the gamemode ID is correct and you include all the required fields.",
      });
    }
  },
};

export default gamemodeController;