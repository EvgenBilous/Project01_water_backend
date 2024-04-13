import waterNotesServices from "../services/waterNotesServices.js";

const createWaterNote = async (req, res) => {
  const { waterVolume, date } = req.body;

  const newWaterNote = await waterNotesServices.createWaterNote({
    waterVolume,
    date,
  });

  res.json(newWaterNote);
};

export default {
  createWaterNote,
};
