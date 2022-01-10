import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesModule } from './movies/movies.module';
import { CategoryModule } from './category/category.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MoviesModule,
    CategoryModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
