import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryDetail } from 'src/app/util/dtos/CategoryDtos';
import { ModalGenericService } from 'src/app/util/shared/modal-generic/modal-generic.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  deleteModalRef: BsModalRef | undefined;
  @ViewChild('deleteModal') deleteModal: any;


  categoryAll: CategoryDetail[] = []
  idUpdate = -1
  idDelete = -1

  constructor(
    private categoryService: CategoryService,
    private modalService: BsModalService,
    private modalGenericService: ModalGenericService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
  }

  updateSelected(id: number) {
    this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
    this.idUpdate = id
  }

  deleteCategory(id: number) {
    this.idDelete = id
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' })
  }

  confirmDelete() {
    this.categoryService.delete(this.idDelete).subscribe({
      next: () => {
        this.modalGenericService.showModal("Categoria deletada com sucesso!")
        this.categoryService.getCategorys().subscribe(data => this.categoryAll = data)
        this.idDelete = -1
      },
      error: (e) => this.modalGenericService.showModal(e.error.fieldsMessage)
    })
    this.declineDelete()
  }

  declineDelete() {
    this.deleteModalRef?.hide()
  }
}
