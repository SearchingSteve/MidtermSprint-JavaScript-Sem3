const { get } = require("express/lib/response");
const { Movies, Genres } = require("./data");

/**
 * Get `x` movies by genre
 * @param {Genres} genre - The genre of the movies
 * @param {number} x - The number of movies to retrieve
 * @returns {Array.<Movies>} - An array of movies matching the genre
 */
function getMoviesByGenre(genre, x) {
  // Implementation here
}

/**
 * Get the `x` top rated movies, ordered by rating
 * @param {number} x - The number of top-rated movies to retrieve
 * @returns {Array.<Movies>} - An array of top-rated movies
 */
function getTopRatedMovies(x) {
  // Implementation here
}

/**
 * Get the details of a movie by its ID
 * @param {number} id - The ID of the movie
 * @returns {Movies} - The movie object
 */
function getMovieDetailsById(id) {
  // Implementation here
}

/**
 * Select a random movie ID
 * @returns {number} - A random movie ID
 */
function selectRandomMovieId() {
  // Implementation here
}

/**
 * Get the `x` soonest relasing upcoming movies
 * @param {number} x - The number of upcoming movies to retrieve
 * @returns {Array.<Movies>} - An array of upcoming movies
 */
function getUpcomingMovies(x) {
  // Implementation here
  let numberOfMovies = x;
  let upcomingMovies = [];

  for (let i = 0; i < Movies.length; i++) {
    if (Movies[i].releaseYear > new Date().getFullYear()) {
      upcomingMovies.push(Movies[i]);
    }
  }

  upcomingMovies.sort((a, b) => a.releaseYear - b.releaseYear);
  upcomingMovies = upcomingMovies.slice(0, numberOfMovies);

  return upcomingMovies;
}

// Export the functions to be used in other modules
module.exports = {
  getMoviesByGenre,
  getTopRatedMovies,
  getMovieDetailsById,
  selectRandomMovieId,
  getUpcomingMovies,
};

getUpcomingMovies(3);
getUpcomingMovies(5);
getUpcomingMovies(10);
