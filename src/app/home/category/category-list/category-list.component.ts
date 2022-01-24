import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { CategoryDetail } from '../../../util/dtos/CategoryDtos';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryAll: CategoryDetail[] = []
  categoryToBeShow: CategoryDetail[] = []
  index = -1
  font_size = 14

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategorys().subscribe(dados => this.categoryAll = dados)
    this.categoryService.getCategorys().subscribe(dados => this.categoryToBeShow = dados.slice(0, 5))
    this.font_size = Number(sessionStorage.getItem("font-size"))
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
    if (this.index < this.categoryToBeShow.length - 1) {
      this.index++;
    } else {
      this.categoryAll.push(this.categoryAll[0])
      this.categoryAll.shift()
      this.categoryToBeShow = this.categoryAll.slice(0, this.categoryToBeShow.length)
    }
  }

  clickCategory(i: number) {
    //this.categoryAll = this.categoryService.getCategorys()
    this.index = i
  }
  mouseEnter(i: number) {
    this.index = i
  }
}
