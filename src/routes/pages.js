// src/routes/pages.js
import express from "express";
const router = express.Router();

router.get("/signin", (req, res) => {
  res.render("signin", { projectName: "My Project", userName: "Jamshiddin" });
});

// POST — formni qabul qiladi
router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  // hozircha tekshiruvsiz
  res.redirect("/");
});

router.get("/signup", (req, res) => {
  res.render("signup", { projectName: "My Project", userName: "Jamshiddin" });
});

router.get("/blank", (req, res) => {
  res.render("blank", { projectName: "My Project", userName: "Jamshiddin" });
});

router.use((req, res) => {
  res.status(404).render("404", {
    projectName: "My Project",
    userName: "Jamshiddin",
    number: 404,
    title: "Page Not Found",
    text: "We’re sorry, the page you are looking for does not exist.",
  });
});

export default router;
