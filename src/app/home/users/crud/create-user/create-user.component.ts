import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { UserService } from 'src/app/services/user.service';
import { LanguageDetail } from 'src/app/util/dtos/LanguageDetail.class';
import { UserPostDto } from 'src/app/util/dtos/UserDtos';
import { ModalGenericService } from 'src/app/util/shared/modal-generic/modal-generic.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUser: UserPostDto = new UserPostDto()
  languageAll: LanguageDetail[] = []
  font_size = 14
  constructor(
    private userService: UserService,
    private languageService: LanguageService,
    private modalGenericService: ModalGenericService) { }

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe(data => this.languageAll = data)
    this.font_size = Number(sessionStorage.getItem("font-size"))
  }

  createUser() {
    this.userService.create(this.newUser).subscribe({
      next: (v) => {
        this.modalGenericService.showModal("Usuário criado com sucesso")
        this.newUser = new UserPostDto()
      },
      error: (e) => this.modalGenericService.showModal(e.error.fieldsMessage)
    })
  }

}
