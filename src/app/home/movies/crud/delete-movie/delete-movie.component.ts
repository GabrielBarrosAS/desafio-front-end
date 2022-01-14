import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail } from 'src/app/util/dtos/MovieDtos';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(private movieService: MoviesService) { }
  movieAll: MovieDetail[] = []

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => this.movieAll = data)
  }

}
