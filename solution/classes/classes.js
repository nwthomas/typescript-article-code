var Movie = /** @class */ (function () {
  function Movie(movie) {
    this.year = movie.year;
    this.name = movie.name;
  }
  Movie.prototype.getMovieYear = function () {
    return this.name + " was made in " + this.year;
  };
  return Movie;
})();
