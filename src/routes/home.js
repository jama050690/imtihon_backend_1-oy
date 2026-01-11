import { Router } from "express";

const router = Router();

const charts = [
  {
    title: "Worldwide Sales",
    canvasId: "worldwide-sales",
    col: "col-sm-12 col-xl-6",
  },
  {
    title: "Sales & Revenue",
    canvasId: "sales-revenue",
    col: "col-sm-12 col-xl-6",
  },
  {
    title: "Monthly Orders",
    canvasId: "monthly-orders",
    col: "col-sm-12 col-xl-6",
  },
  {
    title: "Customer Growth",
    canvasId: "customer-growth",
    col: "col-sm-12 col-xl-6",
  },
];

router.get("/", (req, res) => {
  res.render("index", {
    charts,
    projectName: "My Project",
    userName: "Jamshiddin",
  });
});

export default router;
