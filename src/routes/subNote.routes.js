import express from "express";
import {
  createSubNote,
  getAllSubNotes,
  getSingleSubNote,
  updateSubNote,
  deleteSubNote,
} from "../controllers/subNote.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect); // Protect all routes
router.post("/", createSubNote); // Create note
router.get("/", getAllSubNotes); // Get all notes
router.get("/:id", getSingleSubNote); // Get single note
router.put("/:id", updateSubNote); // Update note
router.delete("/:id", deleteSubNote); // Delete note

export default router;
