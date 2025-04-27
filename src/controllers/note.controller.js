import Note from "../models/note.model.js";

// create note

export const createNote = async (req, res) => {
  try {
    const note = await Note.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.user.id,
    });

    res.status(201).json({ note });
  } catch (err) {
    res.status(500).json({ message: err.message, error: err.message });
  }
};

// get all notes for user

export const getAllNotes = async (req, res) => {
  const notes = await Note.Find({ userId: req.user._id }).sort({
    createdAt: -1,
  });
  res.status(200).json({ notes });
};

export const getSingleNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }
  res.status(200).json({ note });
};

// update note

export const updateNote = async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    { ...req.body, updatedAt: Date.now() },
    { new: true }
  );
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }
  res.status(200).json({ note });
};

export const deleteNote = async (req, res) => {
  const note = await Note.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }
  res.json({ message: "Note deleted" });
};
