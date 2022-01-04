import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies/movies.service';
import { MovieDetail } from 'src/app/movies/util/MovieDetail.class';
import { CategoryService } from '../category.service';
import { CategoryDetail } from '../util/CategoryDetail.class';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryService: CategoryService

  categoryAll: CategoryDetail[] = []
  categoryToBeShow: CategoryDetail[] = []
  index = -1

  constructor(_categoryService: CategoryService) {
    this.categoryService = _categoryService
  }

  ngOnInit(): void {
    this.categoryAll = this.categoryService.getCategorys()
    this.categoryToBeShow = this.categoryAll.slice(0, 3)
  }

  previousCategory() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.categoryAll.unshift(this.categoryAll[this.categoryAll.length - 1])
      this.categoryAll.pop()
      this.categoryToBeShow = this.categoryAll.slice(0, 3)
    }
  }

  nextCategory() {
    if (this.index < 2) {
      this.index++;
    } else {
      this.categoryAll.push(this.categoryAll[0])
      this.categoryAll.shift()
      this.categoryToBeShow = this.categoryAll.slice(0, 3)
    }
  }

  clickCategory(i:number){
    this.categoryAll = this.categoryService.getCategorys()
    this.index = i
  }
}
