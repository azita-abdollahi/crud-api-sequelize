import express from "express";
import { validate } from "../middleware/validate";
import { createNoteSchema, updateNoteSchema  } from "../schemas/note.schema";
import {
     createNoteController, 
     updateNoteController, 
     findAllNoteController, 
     findNoteController, 
     deleteNoteController 
    } from "../controllers/note.controller";

const router = express.Router();
router
  .route("/")
  .get(findAllNoteController)
  .post(validate(createNoteSchema), createNoteController);
router
  .route("/:noteId")
  .get(findNoteController)
  .patch(validate(updateNoteSchema), updateNoteController)
  .delete(deleteNoteController);

export default router;