import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryService } from '../../services/category.service';

import { MoviesService } from '../../services/movies.service';
import { MatIconModule } from '@angular/material/icon';
import { routing } from './routing/category.routing';
import { CategoryListComponent } from './category-list/category-list.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';

@NgModule({
  declarations: [CategoryComponent, MoviesCategoryComponent, CategoryListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    routing
  ],
  providers: [CategoryService, MoviesService],
  exports: [CategoryComponent]
})
export class CategoryModule { }
