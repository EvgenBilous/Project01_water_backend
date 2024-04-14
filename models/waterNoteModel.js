import { Schema, model } from "mongoose";

const DosesWaterSchema = new Schema({
  waterVolume: Number,
  date: String,
});

const waterNoteSchema = Schema({
  date: {
    type: String,
    required: true,
  },
  dosesWater: [DosesWaterSchema],
  totalWater: {
    type: Number,
    default: 0,
  },
  waterRate: {
    type: String,
    default: 15000,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export const WaterNote = model("waterNote", waterNoteSchema);
