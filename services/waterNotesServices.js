import { WaterNote } from "../models/waterNoteModel.js";

const getWaterNotes = () => WaterNote.find();

const addWaterNote = (data) => WaterNote.create(data);

export default {
  addWaterNote,
};
