import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { MovieDetail, MoviePostDto } from '../util/dtos/MovieDtos';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly API = "http://localhost:8080/movies"

  private movies:MovieDetail[] = []

  constructor(private http: HttpClient,private authService:AuthService) { }

  getMovies(): Observable<MovieDetail[]>{

    return this.http.get<MovieDetail[]>(this.API).pipe(
      tap(res => {
        this.movies = res
      })
    );
  }

  getMoviesCategory(categoryId: number) : MovieDetail[]{
    return this.movies.filter(el => el.category.id == categoryId)
  }

  create(objPost:MoviePostDto) : Observable<MovieDetail>{

    let authorizationData = 'Basic ' + btoa(this.authService.getUsername() + ':' + this.authService.getPassword());

    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': authorizationData
      })
    };
    
    return this.http.post<MovieDetail>(this.API,objPost, headerOptions).pipe(take(1))

  }

  update(){
    console.log("Atualizar filme")
  }

}
