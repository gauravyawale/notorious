import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";
import noteRoutes from "./routes/note.routes.js";
import subNoteRoutes from "./routes/subNote.routes.js";
export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/subnotes", subNoteRoutes);
