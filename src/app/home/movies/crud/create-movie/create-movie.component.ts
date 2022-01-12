import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';
import { MoviesService } from 'src/app/services/movies.service';
import { CategoryDetail } from 'src/app/util/dtos/CategoryDetail.class';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';
import { MovieDetail } from 'src/app/util/dtos/MovieDetail.class';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  languageAll: LanguageDetail[] = []
  categoryAll: CategoryDetail[] = []
  newMovie: MovieDetail = new MovieDetail()

  constructor(private languageService:LanguageService,private categoryService: CategoryService,private movieService:MoviesService) { }

  ngOnInit(): void {

    this.languageService.getLanguages().subscribe(data => this.languageAll = data)
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)

  }

  createMovie(){
    this.movieService.create(this.newMovie)
  }
}
