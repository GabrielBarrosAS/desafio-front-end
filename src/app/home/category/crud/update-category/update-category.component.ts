import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';
import { CategoryDetail, CategoryPutDto } from 'src/app/util/dtos/CategoryDtos';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  categoryAll: CategoryDetail[] = []
  languageAll: LanguageDetail[] = []
  index = -1
  sucess = 0
  categoryPut: CategoryPutDto = new CategoryPutDto()

  constructor(private categoryService: CategoryService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
    this.languageService.getLanguages().subscribe(data => this.languageAll = data)
  }

  categoryUpdateSelected(i: Event) {
    var a = i.target as HTMLInputElement
    this.index = Number(a.value)

    this.categoryPut.id = this.categoryAll[this.index].id
    this.categoryPut.tag = this.categoryAll[this.index].tag
    this.categoryPut.name = this.categoryAll[this.index].name
    this.categoryPut.languageID = this.categoryAll[this.index].language.id
  }

  updateCategory() {
    this.categoryService.update(this.categoryPut).subscribe({
      next: (v) => this.sucess = 1,
      error: (e) => alert(e),
      complete: () => console.info('complete')
    })
    //fazer com que os dados sejam atualizados aqui ou recarregar a página
    this.index = -1
  }



}
