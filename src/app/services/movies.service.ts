import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MovieDetail } from '../util/dtos/MovieDetail.class';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly API = "http://localhost:8080/movies"

  private movies:MovieDetail[] = []

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieDetail[]>{

    /*var movies = []
    movies = [
      new MovieDetail("Filme 1", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg", new CategoryDetail(1, "Category 1", "catg-001", "https://www.nederman.com/-/media/nederman-com/knowledge-center/combustible-dust.jpg?h=410&la=pt-BR&w=720&crop=1&hash=236EE34B2737CCC9B13EB301723D9F12")),
      new MovieDetail("Filme 2", "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Up_p%C3%B4ster.jpg/243px-Up_p%C3%B4ster.jpg", new CategoryDetail(2, "Category 2", "catg-002", "https://br.web.img2.acsta.net/r_1280_720/newsv7/20/06/12/18/16/2912051.jpg")),
      new MovieDetail("Filme 3", "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg/250px-Minions_2-_The_Rise_of_Gru_poster.jpeg", new CategoryDetail(3, "Category 3", "catg-003", "https://st2.depositphotos.com/1752660/8820/i/600/depositphotos_88204376-stock-photo-spaceship-with-blue-engine-glow.jpg")),
      new MovieDetail("Filme 4", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg", new CategoryDetail(4, "Category 4", "catg-004", "a")),
      new MovieDetail("Filme 5", "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Up_p%C3%B4ster.jpg/243px-Up_p%C3%B4ster.jpg", new CategoryDetail(5, "Category 5", "catg-005", "a")),
      new MovieDetail("Filme 6", "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg/250px-Minions_2-_The_Rise_of_Gru_poster.jpeg", new CategoryDetail(6, "Category 6", "catg-006", "a")),
      new MovieDetail("Filme 7", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg", new CategoryDetail(7, "Category 7", "catg-007", "a")),
      new MovieDetail("Filme 8", "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Up_p%C3%B4ster.jpg/243px-Up_p%C3%B4ster.jpg", new CategoryDetail(8, "Category 8", "catg-008", "a")),
      new MovieDetail("Filme 9", "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg/250px-Minions_2-_The_Rise_of_Gru_poster.jpeg", new CategoryDetail(1, "Category 1", "catg-001", "a")),
      new MovieDetail("Filme 10", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg", new CategoryDetail(2, "Category 2", "catg-002", "a")),
      new MovieDetail("Filme 11", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg", new CategoryDetail(1, "Category 1", "catg-001", "a")),
    ]*/

    return this.http.get<MovieDetail[]>(this.API).pipe(
      tap(res => {
        this.movies = res
      })
    );
  }

  getMoviesCategory(categoryId: number) : MovieDetail[]{
    return this.movies.filter(el => el.category.id == categoryId)
  }

}
