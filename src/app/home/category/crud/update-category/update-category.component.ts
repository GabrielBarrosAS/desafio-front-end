import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';
import { CategoryDetail, CategoryPutDto } from 'src/app/util/dtos/CategoryDtos';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';
import { ModalGenericService } from 'src/app/util/shared/modal-generic/modal-generic.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  categoryAll: CategoryDetail[] = []
  languageAll: LanguageDetail[] = []
  @Input() index = -1
  categoryPut: CategoryPutDto = new CategoryPutDto()

  constructor(
    private categoryService: CategoryService,
    private languageService: LanguageService,
    private modalGenericService: ModalGenericService) { }

  ngOnInit(): void {
    this.categoryService.getCategorys().subscribe(data => {
      this.categoryAll = data
      this.updatePropertiesPutObject(this.categoryAll[this.index])
    })
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
      next: (v) => {
        this.modalGenericService.showModal("Sucesso ao atualizar categoria!")
        this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
        this.updatePropertiesPutObject(this.categoryAll[0])
        this.index = -1
      },
      error: (e) => this.modalGenericService.showModal(e.error.fieldsMessage),
    })
  }

  updatePropertiesPutObject(categoryDetail: CategoryDetail) {
    this.categoryPut.id = categoryDetail.id
    this.categoryPut.name = categoryDetail.name
    this.categoryPut.tag = categoryDetail.tag
    this.categoryPut.languageID = categoryDetail.language.id
  }



}
