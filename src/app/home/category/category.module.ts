import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryService } from '../../services/category.service';

import { MoviesService } from '../../services/movies.service';
import { MatIconModule } from '@angular/material/icon';
import { RoutingCategory } from './routing/category.routing';
import { CategoryListComponent } from './category-list/category-list.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { CreateCategoryComponent } from './crud/create-category/create-category.component';
import { DeleteCategoryComponent } from './crud/delete-category/delete-category.component';
import { UpdateCategoryComponent } from './crud/update-category/update-category.component';

@NgModule({
  declarations: [CategoryComponent, MoviesCategoryComponent, CategoryListComponent, CreateCategoryComponent, DeleteCategoryComponent, UpdateCategoryComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RoutingCategory
  ],
  providers: [CategoryService, MoviesService,],
  exports: [CategoryComponent]
})
export class CategoryModule { }
