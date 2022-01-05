import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/movies/movies.service';
import { MovieDetail } from 'src/app/movies/util/MovieDetail.class';

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.css']
})
export class MoviesCategoryComponent implements OnInit {

  id = 0
  movieListCategory: MovieDetail[] = []
  movieShow: MovieDetail[] = []
  index = 0

  constructor(private _activatedroute: ActivatedRoute, private _movieService: MoviesService) {
  }

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.movieListCategory = this._movieService.getMoviesCategory(this.id)
      this.movieShow = this.movieListCategory.slice(0, 3)
    });
  }

  previousMovie() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.movieListCategory.unshift(this.movieListCategory[this.movieListCategory.length - 1])
      this.movieListCategory.pop()
      this.movieListCategory = this.movieListCategory.slice()
    }
  }

  nextMovie() {
    if (this.index < this.movieShow.length - 1) {
      this.index++;
    } else {
      this.movieListCategory.push(this.movieListCategory[0])
      this.movieListCategory = this.movieListCategory.slice(1)
      this.movieListCategory = this.movieListCategory.slice()
    }
  }

}
