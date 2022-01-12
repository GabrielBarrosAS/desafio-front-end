import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';

import { RoutingMovies } from './routing/movies.routing';
import { UpdateMovieComponent } from './crud/update-movie/update-movie.component';
import { CreateMovieComponent } from './crud/create-movie/create-movie.component';
import { DeleteMovieComponent } from './crud/delete-movie/delete-movie.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [MoviesComponent,UpdateMovieComponent, CreateMovieComponent, DeleteMovieComponent],
  imports: [
    CommonModule,
    RoutingMovies,
    FormsModule,
    MatIconModule,
  ],
  providers:[MoviesService],
  exports:[MoviesComponent]
})
export class MoviesModule { }
