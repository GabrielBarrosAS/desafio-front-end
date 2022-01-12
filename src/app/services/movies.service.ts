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

    return this.http.get<MovieDetail[]>(this.API).pipe(
      tap(res => {
        this.movies = res
      })
    );
  }

  getMoviesCategory(categoryId: number) : MovieDetail[]{
    return this.movies.filter(el => el.category.id == categoryId)
  }

  create(objPost:MovieDetail){
    console.log(objPost)
  }

  update(){
    console.log("Atualizar filme")
  }

}
