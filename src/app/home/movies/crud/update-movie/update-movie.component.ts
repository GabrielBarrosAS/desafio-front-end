import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';
import { MoviesService } from 'src/app/services/movies.service';
import { CategoryDetail } from 'src/app/util/dtos/CategoryDetail.class';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';
import { MovieDetail } from 'src/app/util/dtos/MovieDetail.class';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  languageAll: LanguageDetail[] = []
  categoryAll: CategoryDetail[] = []
  movieAll: MovieDetail[] = []
  index = 0
  constructor(private languageService:LanguageService,private categoryService: CategoryService,private movieService:MoviesService) { }

  ngOnInit(): void {

    this.languageService.getLanguages().subscribe(data => this.languageAll = data)
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
    this.movieService.getMovies().subscribe(data => this.movieAll = data)

  }

  movieUpdateSelected(i:Event){
    var a = i.target as HTMLInputElement
    this.index = Number(a.value)
  }

  updateMovie(){
    this.movieService.update()
  }

}
