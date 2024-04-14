import { WaterNote } from "../models/waterNoteModel.js";

const addNewWaterNote = async (owner, { waterVolume, date }) => {
  try {
    const dosesWater = [{ waterVolume, date }];

    const newWaterNote = await WaterNote.create({
      date,
      dosesWater,
      totalWater: waterVolume,
      owner,
    });
    return {
      ...newWaterNote._doc,
    };
  } catch (error) {
    console.log(error.message);
  }
};

const getWaterNote = (id) => WaterNote.find({ owner });

export default {
  addNewWaterNote,
  getWaterNote,
};
