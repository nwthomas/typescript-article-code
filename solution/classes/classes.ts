/**
 * Examples of class types in TypeScript
 */

class Movie {
  year: string;

  constructor(year: string) {
    this.year = year;
  }

  getMovieYear() {
    return "The movie was made in " + this.year;
  }
}
