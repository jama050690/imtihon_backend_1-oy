// src/routes/chart.route.js
import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("chart", {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
});

export default router;
