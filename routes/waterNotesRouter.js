import express from "express";
import waterNotesControllers from "../controllers/waterNotesControllers.js";

const waterNotesRouter = express.Router();

waterNotesRouter.post("/", waterNotesControllers.createWaterNote);

export default waterNotesRouter;
