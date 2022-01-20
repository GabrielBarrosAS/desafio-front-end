import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { UserService } from 'src/app/services/user.service';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';
import { UserDetail, UserPutDto } from 'src/app/util/dtos/UserDtos';
import { ModalGenericService } from 'src/app/util/shared/modal-generic/modal-generic.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  usersAll: UserDetail[] = []
  languageAll: LanguageDetail[] = []
  @Input() index = 0
  userPut: UserPutDto = new UserPutDto()

  constructor(
    private languageService: LanguageService,
    private modalGenericService: ModalGenericService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.usersAll = data
      this.updatePropertiesPutObject(this.usersAll[this.index])
    })
    this.languageService.getLanguages().subscribe(data => this.languageAll = data)
  }

  userUpdateSelected(i: Event) {
    var a = i.target as HTMLInputElement
    this.index = Number(a.value)

    this.updatePropertiesPutObject(this.usersAll[this.index])
  }

  updateUser() {
    this.userService.update(this.userPut).subscribe({
      next: (v) => {
        this.modalGenericService.showModal("Usuário atualizado com sucesso")
        this.userService.getUsers().subscribe(data => {
          this.usersAll = data
          this.updatePropertiesPutObject(this.usersAll[0])
          this.index = 0
        })
      },
      error: (e) => this.modalGenericService.showModal(e.error.fieldsMessage)
    })
  }

  updatePropertiesPutObject(userDetail: UserDetail) {
    this.userPut.id = userDetail.id
    this.userPut.name = userDetail.name
    this.userPut.cpf = userDetail.cpf
    this.userPut.email = userDetail.email
    this.userPut.telephone = userDetail.telephone
    this.userPut.profile = userDetail.profile
    this.userPut.languageID = userDetail.language.id
    this.userPut.roles = userDetail.roles
  }

}
