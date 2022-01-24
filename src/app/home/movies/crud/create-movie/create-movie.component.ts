import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';
import { MoviesService } from 'src/app/services/movies.service';
import { CategoryDetail } from 'src/app/util/dtos/CategoryDtos';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';
import { MoviePostDto } from 'src/app/util/dtos/MovieDtos';
import { ModalGenericService } from 'src/app/util/shared/modal-generic/modal-generic.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  languageAll: LanguageDetail[] = []
  categoryAll: CategoryDetail[] = []
  newMovie: MoviePostDto = new MoviePostDto()
  font_size = 14

  constructor(
    private languageService: LanguageService,
    private categoryService: CategoryService,
    private movieService: MoviesService,
    private modalGenericService: ModalGenericService) { }

  ngOnInit(): void {

    this.languageService.getLanguages().subscribe(data => this.languageAll = data)
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
    this.font_size = Number(sessionStorage.getItem("font-size"))

  }

  createMovie() {
    this.movieService.create(this.newMovie).subscribe({
      next: (v) => this.modalGenericService.showModal("Filme Criado com sucesso!"),
      error: (e) => this.modalGenericService.showModal(e.error.fieldsMessage),
    })
  }
}
