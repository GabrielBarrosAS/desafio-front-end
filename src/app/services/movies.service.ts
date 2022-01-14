import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { MovieDetail, MoviePostDto, MoviePutDto } from '../util/dtos/MovieDtos';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly API = "http://localhost:8080/movies"

  private movies: MovieDetail[] = []

  constructor(private http: HttpClient, private authService: AuthService) { }

  getMovies(): Observable<MovieDetail[]> {

    return this.http.get<MovieDetail[]>(this.API).pipe(
      tap(res => {
        this.movies = res
      })
    );
  }

  getMoviesCategory(categoryId: number): MovieDetail[] {
    return this.movies.filter(el => el.category.id == categoryId)
  }

  headerOptions(){
    let authorizationData = 'Basic ' + btoa(this.authService.getUsername() + ':' + this.authService.getPassword());

    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': authorizationData
      })
    };
    return headerOptions
  }

  create(objPost: MoviePostDto): Observable<MovieDetail> {

    return this.http.post<MovieDetail>(this.API, objPost, this.headerOptions()).pipe(take(1))

  }

  update(moviePut: MoviePutDto) {

    return this.http.put<MovieDetail>(this.API, moviePut, this.headerOptions()).pipe(take(1))

  }

}
