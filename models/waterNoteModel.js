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
  // owner: {
  //   type: Schema.Types.ObjectId,
  //   ref: "user",
  // },
});

export const WaterNote = model("waterNote", waterNoteSchema);
