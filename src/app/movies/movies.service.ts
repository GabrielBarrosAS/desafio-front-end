import { Injectable } from '@angular/core';
import { CategoryDetail } from '../category/util/CategoryDetail.class';
import { MovieDetail } from './util/MovieDetail.class';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(): MovieDetail[] {


    var movies = []
    movies = [
      new MovieDetail("Filme 1", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",new CategoryDetail(1,"Category 1", "catg-001")),
      new MovieDetail("Filme 2", "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Up_p%C3%B4ster.jpg/243px-Up_p%C3%B4ster.jpg",new CategoryDetail(2,"Category 2", "catg-002")),
      new MovieDetail("Filme 3", "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg/250px-Minions_2-_The_Rise_of_Gru_poster.jpeg",new CategoryDetail(3,"Category 3", "catg-003")),
      new MovieDetail("Filme 4", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",new CategoryDetail(4,"Category 4", "catg-004")),
      new MovieDetail("Filme 5", "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Up_p%C3%B4ster.jpg/243px-Up_p%C3%B4ster.jpg",new CategoryDetail(5,"Category 5", "catg-005")),
      new MovieDetail("Filme 6", "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg/250px-Minions_2-_The_Rise_of_Gru_poster.jpeg",new CategoryDetail(6,"Category 6", "catg-006")),
      new MovieDetail("Filme 7", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",new CategoryDetail(7,"Category 7", "catg-007")),
      new MovieDetail("Filme 8", "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Up_p%C3%B4ster.jpg/243px-Up_p%C3%B4ster.jpg",new CategoryDetail(8,"Category 8", "catg-008")),
      new MovieDetail("Filme 9", "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg/250px-Minions_2-_The_Rise_of_Gru_poster.jpeg",new CategoryDetail(1,"Category 1", "catg-001")),
      new MovieDetail("Filme 10", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",new CategoryDetail(2,"Category 2", "catg-002")),
    ]

    return movies
  }

  getMoviesCategory(categoryId:number): MovieDetail[]{
    return this.getMovies().filter(el => el.category.id == categoryId)
  }

}
