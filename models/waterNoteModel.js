import { Schema, model } from "mongoose";

const waterNoteSchema = Schema({
  waterVolume: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const WaterNote = model("waterNote", waterNoteSchema);
