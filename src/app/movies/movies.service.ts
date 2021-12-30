import { Injectable } from '@angular/core';
import { MovieDetail } from './util/MovieDetail.class';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: MovieDetail[] = [
    new MovieDetail("Filme 1", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"),
    new MovieDetail("Filme 2", "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Up_p%C3%B4ster.jpg/243px-Up_p%C3%B4ster.jpg"),
    new MovieDetail("Filme 3", "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg/250px-Minions_2-_The_Rise_of_Gru_poster.jpeg"),
    new MovieDetail("Filme 4", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"),
    new MovieDetail("Filme 5", "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Up_p%C3%B4ster.jpg/243px-Up_p%C3%B4ster.jpg"),
    new MovieDetail("Filme 6", "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg/250px-Minions_2-_The_Rise_of_Gru_poster.jpeg"),
    new MovieDetail("Filme 7", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"),
    new MovieDetail("Filme 8", "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Up_p%C3%B4ster.jpg/243px-Up_p%C3%B4ster.jpg"),
    new MovieDetail("Filme 9", "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg/250px-Minions_2-_The_Rise_of_Gru_poster.jpeg"),
    new MovieDetail("Filme 10", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"),
  ]

  constructor() { }

  getMovies(): MovieDetail[] {
    return this.movies
  }

}
