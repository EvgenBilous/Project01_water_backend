import Joi from "joi";

export const waterNoteJoiSchema = Joi.object({
  waterVolume: Joi.number().required(),
  date: Joi.string().required(),
});
