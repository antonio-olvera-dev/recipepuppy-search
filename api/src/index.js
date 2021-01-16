const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());
app.set("port", 3000);
app.post("/", (req, res) => {
  const body = req.body;
  const query = body.query;
  const ingredients = body.ingredients;
  const page = body.page;
  axios
    .get(
      `http://www.recipepuppy.com/api/?i=${ingredients}&q=${query}&p=${page}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(app.get("port"), () => {
  console.log(`servidor levantado en http://localhost:${app.get("port")}`);
});
