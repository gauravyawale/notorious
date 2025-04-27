import express from "express";
import {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect); // Protect all routes
router.post("/", createNote); // Create note
router.get("/", getAllNotes); // Get all notes
router.get("/:id", getSingleNote); // Get single note
router.put("/:id", updateNote); // Update note
router.delete("/:id", deleteNote); // Delete note

export default router;
