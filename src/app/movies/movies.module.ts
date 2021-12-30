import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './movies.service';
import { MoviesComponent } from './movies.component';

import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  providers:[MoviesService],
  exports:[MoviesComponent]
})
export class MoviesModule { }
