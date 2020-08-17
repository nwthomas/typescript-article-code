var Movie = /** @class */ (function () {
  function Movie(year) {
    this.year = year;
  }
  Movie.prototype.getMovieYear = function () {
    return "The movie was made in " + this.year;
  };
  return Movie;
})();
