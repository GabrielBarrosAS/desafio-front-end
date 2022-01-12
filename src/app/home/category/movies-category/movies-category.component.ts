import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { MoviesService } from 'src/app/services/movies.service';
import { CategoryDetail } from 'src/app/util/dtos/CategoryDetail.class';
import { MovieDetail } from 'src/app/util/dtos/MovieDetail.class';

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.css']
})
export class MoviesCategoryComponent implements OnInit {

  id = 0
  movieListCategory: MovieDetail[] = []
  movieShow: MovieDetail[] = []
  categoryAll: CategoryDetail[] = []
  index = 0

  constructor(private _activatedroute: ActivatedRoute, private _movieService: MoviesService,private categoryService:CategoryService) {
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
  }

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.movieListCategory = this._movieService.getMoviesCategory(this.id)
      this.movieShow = this._movieService.getMoviesCategory(this.id).slice(0,3)
      console.log(this.id)
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
