const { 
    getMoviesByGenre, 
    getTopRatedMovies, 
    getMovieDetailsById,
     selectRandomMovieId
} = require("../../utils/movieUtils");

const { Genres, Movies } = require('../../utils/data');

describe('Movie Utility Functions', () => {
    describe('getMoviesByGenre', () => {
        test('should return (x) amount of movies from given genre', () => {
            // specify function parameters 
            const genre = Genres.CRIME;
            const x = 3;
            const result = getMoviesByGenre(genre, x);

            // expect 4 (x) movies to be returned and all to be crime (genre)
            expect(result.length).toBe(x);
            expect(result.every(movie => movie.genre === genre)).toBe(true);
        });

        test('should return an appropriate response (empty array) if genre has no movies', () => {
            // include a genre that doesn't exist as the genre parameter
            const result = getMoviesByGenre('DOES-NOT-EXIST', 5);
            // expect result to be an empty array
            expect(result).toEqual([]);
        })
    });

    describe('getTopRatedMovies', () => {

    });

    describe('getMovieDetailsById', () => {
        
    });

    describe('selectRandomMovieId', () => {

    });
});


