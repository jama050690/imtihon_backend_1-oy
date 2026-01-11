// src/routes/pages.js
import express from "express";
const router = express.Router();

router.get("/signin", (req, res) => {
  res.render("signin", { projectName: "My Project" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { projectName: "My Project" });
});

router.get("/blank", (req, res) => {
  res.render("blank", { projectName: "My Project" });
});

router.get("/error-404", (req, res) => {
  res.render("404", { projectName: "My Project" });
});

export default router;
