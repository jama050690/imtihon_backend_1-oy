import { Router } from "express";

const router = Router();
const tableData = [
  {
    scope: 1,
    first: "Jamshiddin",
    last: "Babajonov",
    email: "jbm050690@mail.com",
    country: "Uzbekiston",
    zip: 123,
    status: "member",
  },
  {
    scope: 2,
    first: "Tolmas",
    last: "O'rinov",
    email: "orinov_007@mail.com",
    country: "Uzbekiston",
    zip: 456,
    status: "member",
  },
  {
    scope: 3,
    first: "Sardor",
    last: "Sunnatullayev",
    email: "sador_05_02@mail.com",
    country: "Uzbekiston",
    zip: 789,
    status: "member",
  },
];
router.get("/table", (req, res) => {
  res.render("table", {
    projectName: "My Project",
    userName: "Jamshiddin",
    tableData,
  });
});
router.get("/:id", (req, res) => {
  const id = req.params.id - 0;

  const blog = findblog(id);

  if (blog === null) {
    res.render("error404");

    return;
  }

  res.render("blog", { blog });
});

function findblog(id) {
  for (const blog of blogs) {
    if (blog.id === id) {
      return blog;
    }
  }

  return null;
}

export default router;
