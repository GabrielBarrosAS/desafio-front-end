import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { User, UserDetail } from '../util/dtos/UserDtos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { take } from 'rxjs';
import { ModalGenericService } from '../util/shared/modal-generic/modal-generic.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = "http://localhost:8080/users/oauth"

  private response: UserDetail = new UserDetail();

  userAdminEmitter = new EventEmitter<boolean>();
  userEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private http: HttpClient,
    private modalGenericService: ModalGenericService
  ) { }

  headerOptions() {
    console.log(document.cookie.split("="))
    let authorizationData = 'Basic ' + document.cookie.split("=")[1];

    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': authorizationData
      })
    };
    return headerOptions
  }

  authenticate(user: User) {
    this.response.token = ""
    this.response.id = -1
    this.response.roles = ""

    this.userAdminEmitter.emit(false);
    this.userEmitter.emit(false);

    this.http.post<UserDetail>(this.API, user).subscribe({
      next: data => {

        this.response = data

        document.cookie = `token=${this.response.token}`

        this.http.get<UserDetail>(`http://localhost:8080/users/${this.response.id}`, this.headerOptions()).subscribe(

          data => {
            this.response = data
            var listRoles = this.response.roles.split(",")

            if (listRoles.includes("ROLE_ADMIN")) {
              this.modalGenericService.showModal("Seja bem vindo usuário ADMINISTRADOR!")
              this.userAdminEmitter.emit(true);
            } else {
              this.modalGenericService.showModal("Seja bem vindo usuário!")
              this.userEmitter.emit(true);
            }
            this.router.navigate(['/'])
          }
        )
      },
      error: (e) => {
        this.modalGenericService.showModal("Credenciais inválidas, tente novamente!")
        this.userAdminEmitter.emit(false);
        this.userEmitter.emit(false);
      }
    })
  }
}
