// src/routes/widget.route.js
import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("widget", {
    projectName: "My Project",
    userName: "Jamshiddin",
    
  });
});

export default router;
