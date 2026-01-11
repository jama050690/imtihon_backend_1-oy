import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import dashboardRouter from "./routes/dashboard.js";
import tableRouter from "./routes/table.js";
import chartRouter from "./routes/charter.js";
import widgetRouter from "./routes/widget.js";
import pageRouter from "./routes/pages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function main() {
  const app = express();
  const PORT = 3000;

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.use(express.static(path.join(__dirname, "../public")));

  // ✅ DASHBOARD (HOME)
  app.use("/", dashboardRouter);

  // ✅ MAIN SECTIONS
  app.use("/widgets", widgetRouter);
  app.use("/tables", tableRouter);
  app.use("/charts", chartRouter);

  // ✅ PAGES
  app.use("/", pageRouter);

  // ✅ 404
  app.use((req, res) => {
    res.status(404).render("404", { projectName: "My Project" });
  });

  app.listen(PORT, () => {
    console.log(`🚀 http://localhost:${PORT}`);
  });
}
