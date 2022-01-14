import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';
import { MoviesService } from 'src/app/services/movies.service';
import { CategoryDetail } from 'src/app/util/dtos/CategoryDtos';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';
import { MovieDetail, MoviePutDto } from 'src/app/util/dtos/MovieDtos';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  languageAll: LanguageDetail[] = []
  categoryAll: CategoryDetail[] = []
  movieAll: MovieDetail[] = []
  index = -1

  moviePut: MoviePutDto = new MoviePutDto()

  constructor(private languageService: LanguageService, private categoryService: CategoryService, private movieService: MoviesService) { }

  ngOnInit(): void {

    this.languageService.getLanguages().subscribe(data => this.languageAll = data)
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
    this.movieService.getMovies().subscribe(data => this.movieAll = data)
    this.index = -1
  }

  movieUpdateSelected(i: Event) {
    var a = i.target as HTMLInputElement
    this.index = Number(a.value)

    
    this.moviePut.id = this.movieAll[this.index].id
    this.moviePut.tittle = this.movieAll[this.index].tittle
    this.moviePut.synopsis = this.movieAll[this.index].synopsis
    this.moviePut.image = this.movieAll[this.index].image
    this.moviePut.duration = this.movieAll[this.index].duration
    this.moviePut.launchData = this.movieAll[this.index].launchData
    this.moviePut.categoryID = this.movieAll[this.index].category.id
    this.moviePut.languageID = this.movieAll[this.index].language.id
  }

  updateMovie() {
    this.movieService.update(this.moviePut).subscribe({
      next: (v) => alert(v),
      error: (e) => alert(e),
      complete: () => console.info('complete') 
    })
  }

}
