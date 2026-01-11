import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import dashboardRouter from "./routes/dashboard.js";
import tableRouter from "./routes/table.js";
import chartRouter from "./routes/chart.js";
import widgetRouter from "./routes/widget.js";
import pageRouter from "./routes/pages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function main() {
  const app = express();

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.use(express.static(path.join(__dirname, "../public")));

  app.use("/", dashboardRouter);
  app.use("/table", tableRouter);
  app.use("/chart", chartRouter);
  app.use("/widget", widgetRouter);
  app.use("/", pageRouter); // signin, signup, blank, error-404

  app.use((req, res) => {
    res.status(404).render("404", { projectName: "My Project" });
  });

  app.listen(3000, () => console.log(" http://localhost:3000"));
}
