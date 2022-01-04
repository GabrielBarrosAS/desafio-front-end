import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { MovieDetail } from './util/MovieDetail.class';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesService: MoviesService
  moviesAll: MovieDetail[] = []
  movies: MovieDetail[] = []
  index = 0

  constructor(_movieService: MoviesService) { 
    this.moviesService = _movieService
  }

  ngOnInit(): void {
    this.moviesAll = this.moviesService.getMovies().slice()
    this.movies = this.moviesAll.slice(0,8)
  }

  mouseMovie(i:number){
    this.index = i
  }

  previousMovie(){
    if(this.index > 0){
      this.index--;
    }else{
      this.moviesAll.unshift(this.moviesAll[this.moviesAll.length-1])
      this.moviesAll.pop()
      this.movies = this.moviesAll.slice(0,8)
    }
  }

  nextMovie(){
    if(this.index < 7){
      this.index++;
    }else{
      this.moviesAll.push(this.moviesAll[0])
      this.moviesAll = this.moviesAll.slice(1)
      this.movies = this.moviesAll.slice(0,8)
    }
  }

}
