// src/routes/dashboard.js
import express from "express";
const router = express.Router();

const charts = [
  { title: "Worldwide Sales", canvasId: "worldwide-sales" },
  { title: "Sales & Revenue", canvasId: "sales-revenue" },
];

router.get("/", (req, res) => {
  res.render("index", {
    projectName: "My Project",
    userName: "Jamshiddin",
    charts, 
  });
});

export default router;
