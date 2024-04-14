import waterNotesServices from "../services/waterNotesServices.js";

const createWaterNote = async (req, res) => {
  const { _id: owner } = req.user;
  const newWaterNote = await waterNotesServices.addNewWaterNote(
    owner,
    req.body
  );
  res.status(201).json(newWaterNote);
};

const updateData = async (req, res) => {};

export default {
  createWaterNote,
};
