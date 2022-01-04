import { Component, OnInit } from '@angular/core';
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
    this.categoryToBeShow = this.categoryAll.slice(0, 5)
  }

  previousCategory() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = 0
      this.categoryAll.unshift(this.categoryAll[this.categoryAll.length - 1])
      this.categoryAll.pop()
      this.categoryToBeShow = this.categoryAll.slice(0, this.categoryToBeShow.length)
    }
  }

  nextCategory() {
    if (this.index < this.categoryToBeShow.length-1) {
      this.index++;
    } else {
      this.categoryAll.push(this.categoryAll[0])
      this.categoryAll.shift()
      this.categoryToBeShow = this.categoryAll.slice(0, this.categoryToBeShow.length)
    }
  }

  clickCategory(i:number){
    this.categoryAll = this.categoryService.getCategorys()
    this.index = i
  }
  mouseEnter(i:number){
    this.index = i
  }
}
