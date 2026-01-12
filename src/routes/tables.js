import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("table", {
    projectName: "My Project",
    userName: "Jamshiddin",

    tables: [
      { title: "Basic Table", class: "table" },
      { title: "Accented Table", class: "table table-striped" },
      { title: "Hoverable Table", class: "table table-hover" },
      { title: "Color Table", class: "table table-dark" },
      { title: "Bordered Table", class: "table table-bordered" },
      { title: "Table Without Border", class: "table table-borderless" },
    ],

    rows: [
      {
        scope: 1,
        first: "Baron",
        last: "Doe",
        email: "baron@email.com",
        country: "US",
        zip: "10001",
        status: "Active",
      },
      {
        scope: 2,
        first: "Mark",
        last: "Otto",
        email: "mark@email.com",
        country: "DE",
        zip: "10115",
        status: "Pending",
      },
      {
        scope: 3,
        first: "Jacob",
        last: "Thornton",
        email: "jacob@email.com",
        country: "UK",
        zip: "SW1A",
        status: "Inactive",
      },
      {
        scope: 4,
        first: "Jamshiddin",
        last: "Babajonov",
        email: "jbm050690@gmail.com",
        country: "Uzbekistan",
        zip: "123",
        status: "Member",
      },
      {
        scope: 5,
        first: "Tolmas",
        last: "O'rinov",
        email: "tolmas@gmail.com",
        country: "Uzbekistan",
        zip: "456",
        status: "Member",
      },
    ],
  });
});

export default router;
