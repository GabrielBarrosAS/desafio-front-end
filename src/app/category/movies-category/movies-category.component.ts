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

  constructor(private _activatedroute: ActivatedRoute, private _movieService: MoviesService) {
  }

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.movieListCategory = this._movieService.getMoviesCategory(this.id)
    });
  }

}
