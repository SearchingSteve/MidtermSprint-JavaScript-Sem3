const express = require("express");
const path = require("path");
const {
  getTopRatedMovies,
  getMoviesByGenre,
  getMovieDetailsById,
  selectRandomMovieId,
  getUpcomingMovies,
} = require("./utils/movieUtils");
const { Movies, Genres } = require("./utils/data");
const { get } = require("express/lib/response");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.render("index");
});

app.get("/movie/:id", (request, response) => {
  //For use with links like: /movie/1
  const movieId = request.params.id;
});

//Add remaining routes here
app.get("/top_rated", (request, response) => {
  const topRatedMovies = getTopRatedMovies(10);
  response.render("top_rated", { topRatedMovies });
});

app.get("/random", (request, response) => {
  response.render("random", {});
});

app.get("/upcoming", (request, response) => {
  fiveUpcomingMovies = getUpcomingMovies(5);
  response.render("upcoming", { fiveUpcomingMovies });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
