import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';
import { MoviesService } from 'src/app/services/movies.service';
import { CategoryDetail } from 'src/app/util/dtos/CategoryDetail.class';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';
import { MoviePostDto } from 'src/app/util/dtos/MovieDtos';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  languageAll: LanguageDetail[] = []
  categoryAll: CategoryDetail[] = []
  newMovie: MoviePostDto = new MoviePostDto()

  constructor(private languageService:LanguageService,private categoryService: CategoryService,private movieService:MoviesService) { }

  ngOnInit(): void {

    this.languageService.getLanguages().subscribe(data => this.languageAll = data)
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)

  }

  createMovie(){
    this.movieService.create(this.newMovie).subscribe({
      next: (v) => alert(v),
      error: (e) => alert(e),
      complete: () => console.info('complete') 
  })
  }
}
