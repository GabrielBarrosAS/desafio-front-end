import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryDetail } from 'src/app/util/dtos/CategoryDetail.class';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  categoryAll: CategoryDetail[] = []
  index = 0

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
  }

  categoryUpdateSelected(i:Event){
    var a = i.target as HTMLInputElement
    this.index = Number(a.value)
  }

  updateCategory(){
    this.categoryService.update()
  }



}
