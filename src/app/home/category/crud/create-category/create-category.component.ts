import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';
import { CategoryDetail, CategoryPostDto } from 'src/app/util/dtos/CategoryDtos';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';
import { ModalGenericService } from 'src/app/util/shared/modal-generic/modal-generic.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  languageAll: LanguageDetail[] = []
  categoryForm: CategoryPostDto = new CategoryPostDto()
  index = 0

  constructor(
    private languageService: LanguageService,
    private categoryService: CategoryService,
    private modalGenericService: ModalGenericService) { }

  ngOnInit(): void {

    this.languageService.getLanguages().subscribe(data => this.languageAll = data)

  }

  createCategory() {
    this.categoryService.create(this.categoryForm).subscribe({
      next: () => this.modalGenericService.showModal("Categoria criada com sucesso!"),
      error: (e) => this.modalGenericService.showModal(e.error.fieldsMessage)
    })
  }

  languageSelected(i: Event) {
    var a = i.target as HTMLInputElement
    this.index = Number(a.value)
  }

}
