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
  return Movies
  // exclude movies from data.js with "null" as a rating 
  .filter(movie => movie.rating !== null)
  // sort rating from highest to lowest
  .sort((a, b) => b.rating - a.rating)
  // return top (x) rated movies 
  .slice(0, x)
}

/**
 * Get the details of a movie by its ID
 * @param {number} id - The ID of the movie
 * @returns {Movies} - The movie object
 */
function getMovieDetailsById(id) {
  const movie = Movies.find((movie) => movie.id === id);
  return movie || null;
}

/**
 * Select a random movie ID
 * @returns {number} - A random movie ID
 */
function selectRandomMovieId() {
  return Math.floor(Math.random() * Movies.length);
}

/**
 * Get `x` random movies
 * @param {number} x - The number of random movies to retrieve
 * @returns {Array.<Movies>} - An array of random movies
 */
function getRandomMovies(num = 9) {
  const shuffled = Movies.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

module.exports = { getRandomMovies };

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
  getRandomMovies,
  getUpcomingMovies,
};
