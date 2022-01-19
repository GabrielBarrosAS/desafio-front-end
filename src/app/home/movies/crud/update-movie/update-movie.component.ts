import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';
import { MoviesService } from 'src/app/services/movies.service';
import { CategoryDetail } from 'src/app/util/dtos/CategoryDtos';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';
import { MovieDetail, MoviePutDto } from 'src/app/util/dtos/MovieDtos';
import { ModalGenericService } from 'src/app/util/shared/modal-generic/modal-generic.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  languageAll: LanguageDetail[] = []
  categoryAll: CategoryDetail[] = []
  movieAll: MovieDetail[] = []
  @Input() index: number = 0

  moviePut: MoviePutDto = new MoviePutDto()

  constructor(
    private languageService: LanguageService,
    private categoryService: CategoryService,
    private movieService: MoviesService,
    private modalGenericService: ModalGenericService) { }

  ngOnInit(): void {

    this.languageService.getLanguages().subscribe(data => this.languageAll = data)
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
    this.movieService.getMovies().subscribe(data => {
      this.movieAll = data
      this.updatePropertiesPutObject(this.movieAll[this.index])
    })
  }

  ngOnChanges(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movieAll = data
      this.updatePropertiesPutObject(this.movieAll[this.index])
    })
  }

  movieUpdateSelected(i: Event) {
    var a = i.target as HTMLInputElement
    this.index = Number(a.value)

    this.updatePropertiesPutObject(this.movieAll[this.index])
  }

  updateMovie() {
    this.movieService.update(this.moviePut).subscribe({
      next: (v) => {
        this.modalGenericService.showModal("Filme Atualizado com sucesso")
        this.movieService.getMovies().subscribe(data => {
          this.movieAll = data
          this.index = -1
        })
      },
      error: (e) => this.modalGenericService.showModal("Erro ao atualizar filme")
    })
  }

  updatePropertiesPutObject(movieDetail: MovieDetail) {
    this.moviePut.id = movieDetail.id
    this.moviePut.tittle = movieDetail.tittle
    this.moviePut.synopsis = movieDetail.synopsis
    this.moviePut.image = movieDetail.image
    this.moviePut.duration = movieDetail.duration
    this.moviePut.launchData = movieDetail.launchData
    this.moviePut.categoryID = movieDetail.category.id
    this.moviePut.languageID = movieDetail.language.id
  }

}
