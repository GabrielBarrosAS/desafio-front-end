import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { MoviesComponent } from './movies.component';

import { MatIconModule } from '@angular/material/icon';
import { RoutingMovies } from './routing/movies.routing';
import { UpdateMovieComponent } from './crud/update-movie/update-movie.component';
import { CreateMovieComponent } from './crud/create-movie/create-movie.component';
import { DeleteMovieComponent } from './crud/delete-movie/delete-movie.component';

@NgModule({
  declarations: [MoviesComponent, UpdateMovieComponent, CreateMovieComponent, DeleteMovieComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RoutingMovies
  ],
  providers:[MoviesService],
  exports:[MoviesComponent]
})
export class MoviesModule { }
