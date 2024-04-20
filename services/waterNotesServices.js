import { WaterNote } from "../models/waterNoteModel.js";

const createNewWaterNote = (data) => WaterNote.create({ ...data });

const getOneWaterNote = (filter) => WaterNote.findOne(filter);

const getOneAndUpdate = (filter, update, options) =>
  WaterNote.findOneAndUpdate(filter, update, options);

const updateWaterRate = (filter, data) =>
  WaterNote.findOneAndUpdate(filter, data);

export default {
  createNewWaterNote,
  getOneWaterNote,
  getOneAndUpdate,
  updateWaterRate,
};
