import { Router } from "express";

const router = Router();

const blogs = [
  {
    id: 1,
    title: "Venesvela inqrozi...  ",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus incidunt magnam repellendus quos molestias dolor!",
  },
  {
    id: 2,
    title: "Amerikada Trump siyosati...  ",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus incidunt magnam repellendus quos molestias dolor!",
  },
  {
    id: 3,
    title: "Bugun futbol muxlislari 2 bo'linadi...",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus incidunt magnam repellendus quos molestias dolor!",
  },
  {
    id: 4,
    title: "Toshkent shaxrida toza havo muomosi...",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus incidunt magnam repellendus quos molestias dolor!",
  },
];

router.get("/", (req, res) => {
  res.render("blogs", { blogs });
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
