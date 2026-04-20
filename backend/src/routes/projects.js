import { Router } from "express";
import { categories, projectCards, projects } from "../data/content.js";

export const projectsRouter = Router();

projectsRouter.get("/", (req, res) => {
  const category = req.query.category?.toString();
  const limit = Number.parseInt(req.query.limit?.toString() || "0", 10);

  const filtered =
    !category || category === "Tất cả"
      ? projectCards
      : projectCards.filter((p) => p.category === category);

  const data = Number.isFinite(limit) && limit > 0 ? filtered.slice(0, limit) : filtered;

  res.json({
    items: data,
    categories,
    total: filtered.length,
  });
});

projectsRouter.get("/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  return res.json(project);
});
