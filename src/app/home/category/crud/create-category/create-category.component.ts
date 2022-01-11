import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  languageAll: LanguageDetail[] = []

  constructor(private languageService:LanguageService,private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.languageService.getLanguages().subscribe(data => this.languageAll = data)

  }

  createCategory(){
    this.categoryService.create()
  }

}
