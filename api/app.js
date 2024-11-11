const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "13",
      title: "Book Review: The Bear & The Nightingale",
    },
    {
      id: "23",
      title: "Game Review: Pokemon Brillian Diamond...euee",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
