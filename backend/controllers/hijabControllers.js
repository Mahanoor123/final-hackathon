import Hijab from "../models/Hijabs.js";


export const getAllHijabs = async (req, res) => {
  try {
    const hijabs = await Hijab.find();
    res.json({ message: "Hijabs fetched successfully", hijabs });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};