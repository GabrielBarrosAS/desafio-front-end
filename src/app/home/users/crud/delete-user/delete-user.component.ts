import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';
import { UserDetail } from 'src/app/util/dtos/UserDtos';
import { ModalGenericService } from 'src/app/util/shared/modal-generic/modal-generic.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  usersAll: UserDetail[] = []

  deleteModalRef: BsModalRef | undefined;
  @ViewChild('deleteModal') deleteModal: any;

  idUpdate = -1
  idDelete = -1

  constructor(
    private usersService: UserService,
    private modalService: BsModalService,
    private modalGenericService: ModalGenericService) { }


  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data => this.usersAll = data)
  }

  updateSelected(id: number) {
    this.usersService.getUsers().subscribe(data => this.usersAll = data)
    this.idUpdate = id
  }

  deleteMovie(id: number) {
    this.idDelete = id
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' })
  }

  confirmDelete() {
    this.usersService.delete(this.idDelete).subscribe({
      next: () => {
        this.modalGenericService.showModal("Usuário deletado com sucesso!")
        this.usersService.getUsers().subscribe(data => this.usersAll = data)
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
