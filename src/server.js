import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import dashboardRouter from "./routes/dashboard.js";
import tableRouter from "./routes/tables.js";
import chartRouter from "./routes/charts.js";
import widgetRouter from "./routes/widgets.js";
import pageRouter from "./routes/pages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function main() {
  const app = express();

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.use(express.static(path.join(__dirname, "../public")));

  app.use((req, res, next) => {
    res.locals.projectName = "My Project";
    res.locals.userName = "Jamshiddint";
    next();
  });

  app.use("/", dashboardRouter);
  app.use("/tables", tableRouter);
  app.use("/charts", chartRouter);
  app.use("/widgets", widgetRouter);

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/", pageRouter);

  app.listen(3000, () => console.log(" http://localhost:3000"));
}
