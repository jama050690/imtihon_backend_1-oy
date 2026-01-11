import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const PORT = 3000;
import homeRouter from "./routes/home.js";
import tableRouter from "./routes/table.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function main() {
  console.log(__filename);
  console.log(__dirname);

  const app = express();

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.use(express.static(path.join(__dirname, "../public")));

  //  PAGES

  app.use("/", homeRouter);
  app.use("/table", tableRouter);

  app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
  });
}
