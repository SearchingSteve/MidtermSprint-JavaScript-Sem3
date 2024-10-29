const express = require("express");
const path = require("path");
const {
  getTopRatedMovies,
  getMoviesByGenre,
  getMovieDetailsById,
  selectRandomMovieId,
  getRandomMovies,
  getUpcomingMovies,
} = require("./utils/movieUtils");
const { Movies, Genres } = require("./utils/data");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// Route to render the main gallery page with random movies
app.get("/", (request, response) => {
  const randomMovies = getRandomMovies(9); // Get 9 random movies
  response.render("index", { movies: randomMovies }); // Pass movies to index.ejs
});

// Additional routes
app.get("/top_rated", (request, response) => {
  const topRatedMovies = getTopRatedMovies(15);
  response.render("top_rated", { topRatedMovies });
});

app.get("/random", (request, response) => {
  response.render("random", {});
});

app.get("/upcoming", (request, response) => {
  const fiveUpcomingMovies = getUpcomingMovies(5);
  response.render("upcoming", { fiveUpcomingMovies });
});

// Dynamic route to render details for a specific movie by ID
app.get("/:id", (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = Movies.find((movie) => movie.id === movieId); // Find movie by ID

  if (movie) {
    res.render("movie", { movie }); // Render movie.ejs with the movie details
  } else {
    res.status(404).send("Movie not found"); // Handle 404 error where movie isn't found
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
