/**
 * Example of class types in TypeScript
 */

interface Movie {
  year: number;
  name: string;
}

class Movie {
  year: number;
  name: string;

  constructor(movie: Movie) {
    this.year = movie.year;
    this.name = movie.name;
  }

  getMovieYear() {
    return this.name + " was made in " + this.year;
  }
}
