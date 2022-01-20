import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { MoviesService } from 'src/app/services/movies.service';
import { CategoryDetail } from 'src/app/util/dtos/CategoryDtos';
import { MovieDetail } from 'src/app/util/dtos/MovieDtos';

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
  categoryDetail: CategoryDetail | undefined;
  index = 1

  constructor(private _activatedroute: ActivatedRoute, private _movieService: MoviesService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
    this._activatedroute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.movieListCategory = this._movieService.getMoviesCategory(this.id)
      this.movieShow = this._movieService.getMoviesCategory(this.id).slice(0, 3)
      this.categoryService.getCategoryById(this.id).subscribe(data => this.categoryDetail = data)
    });
    setInterval(() => {
      this.nextMovie()
    }, 5000)
  }

  previousMovie() {
    this.movieListCategory.unshift(this.movieListCategory[this.movieListCategory.length - 1])
    this.movieListCategory.pop()
    this.movieShow = this.movieListCategory.slice(0, 3)
  }

  nextMovie() {
    this.movieListCategory.push(this.movieListCategory[0])
    this.movieListCategory = this.movieListCategory.slice(1)
    this.movieShow = this.movieListCategory.slice(0, 3)
  }

}
