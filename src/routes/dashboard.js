import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    projectName: "My Project",
    userName: "Jamshiddin",
    charts: [
      {
        title: "Worldwide Sales",
        canvasId: "worldwide-sales",
      },
      {
        title: "Sales & Revenue",
        canvasId: "sales-revenue",
      },
    ],

    recentSales: [
      {
        date: "01 Jan 2045",
        invoice: "INV-0123",
        customer: "Jamshiddin",
        amount: "$123",
        status: "Paid",
      },
      {
        date: "01 Jan 2045",
        invoice: "INV-0124",
        customer: "Jamshiddin",
        amount: "$456",
        status: "Paid",
      },
      {
        date: "01 Jan 2045",
        invoice: "INV-0124",
        customer: "Jamshiddin",
        amount: "$456",
        status: "Paid",
      },
      {
        date: "01 Jan 2045",
        invoice: "INV-0124",
        customer: "Jamshiddin",
        amount: "$456",
        status: "Paid",
      },
      {
        date: "01 Jan 2045",
        invoice: "INV-0124",
        customer: "Jamshiddin",
        amount: "$456",
        status: "Paid",
      },
    ],

    messages: [
      {
        user: "Jamshiddin",
        time: "15 minutes ago",
        text: "Short message goes here...",
      },
      {
        user: "Jamshiddin",
        time: "20 minutes ago",
        text: "Another message...",
      },
      {
        user: "Jamshiddin",
        time: "30 minutes ago",
        text: "Hello from dashboard",
      },
      {
        user: "Jamshiddin",
        time: "30 minutes ago",
        text: "Hello from dashboard",
      },
    ],

    todos: [
      { text: "Short task goes here...", done: false },
      { text: "Another task", done: false },
      { text: "Completed task", done: true },
      { text: "Short task goes here...", done: false },
      { text: "Another task", done: false },
    ],
  });
});

export default router;
