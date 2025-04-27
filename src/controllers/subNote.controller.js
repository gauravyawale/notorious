import SubNote from "../models/subNote.model.js";

// create subNote

export const createSubNote = async (req, res) => {
  try {
    const subNote = await SubNote.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.user.id,
      noteId: req.body.noteId,
    });

    res.status(201).json({ subNote });
  } catch (err) {
    res.status(500).json({ message: err.message, error: err.message });
  }
};

// get all subNotes for user

export const getAllSubNotes = async (req, res) => {
  const subNotes = await SubNote.find({ userId: req.user._id }).sort({
    createdAt: -1,
  });
  res.status(200).json({ subNotes });
};

export const getSingleSubNote = async (req, res) => {
  const subNote = await SubNote.findById(req.params.id);
  if (!subNote) {
    return res.status(404).json({ message: "SubNote not found" });
  }
  res.status(200).json({ subNote });
};

// update subNote

export const updateSubNote = async (req, res) => {
  const subNote = await SubNote.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    { ...req.body, updatedAt: Date.now() },
    { new: true }
  );
  if (!subNote) {
    return res.status(404).json({ message: "SubNote not found" });
  }
  res.status(200).json({ subNote });
};

export const deleteSubNote = async (req, res) => {
  const subNote = await SubNote.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });
  if (!subNote) {
    return res.status(404).json({ message: "SubNote not found" });
  }
  res.json({ message: "SubNote deleted" });
};
