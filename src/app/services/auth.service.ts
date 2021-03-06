import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { User, UserDetail, UserDetailAuth } from '../util/dtos/UserDtos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalGenericService } from '../util/shared/modal-generic/modal-generic.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = "http://localhost:8080/users/oauth"

  private response: UserDetailAuth = new UserDetailAuth();

  userAdminEmitter = new EventEmitter<boolean>();
  userEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private http: HttpClient,
    private modalGenericService: ModalGenericService
  ) { }

  headerOptions() {

    let authorizationData = 'Basic ' + this.getLocalStorage("token");

    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': authorizationData
      })
    };
    return headerOptions
  }

  private setLocalStorage(key: string, value: string) {

    localStorage.setItem(key, value)

  }

  private getLocalStorage(key: string): String | null {

    return localStorage.getItem(key)

  }


  logout() {

    this.http.get<UserDetail>(`http://localhost:8080/users/${this.response.id}`, this.headerOptions())
      .subscribe({
        next: (v) => this.modalGenericService.showModal(`Até logo, ${v.name}`)
      })

    this.setLocalStorage("token", "")
    this.setLocalStorage("roles", "")
    this.userAdminEmitter.emit(false);
    this.userEmitter.emit(false);
    this.router.navigate(['/'])
  }

  authenticate(user: User) {

    this.userAdminEmitter.emit(false);
    this.userEmitter.emit(false);
    this.setLocalStorage("token", "")
    this.setLocalStorage("roles", "")

    this.http.post<UserDetailAuth>(this.API, user).subscribe({
      next: data => {

        this.response = data

        this.setLocalStorage("token", data.token)

        this.http.get<UserDetail>(`http://localhost:8080/users/${this.response.id}`, this.headerOptions()).subscribe(

          data => {
            this.response.roles = data.roles
            var listRoles = this.response.roles.split(",")

            if (listRoles.includes("ROLE_ADMIN")) {
              this.modalGenericService.showModal("Seja bem vindo usuário ADMINISTRADOR!")
              this.setLocalStorage("roles", "ROLE_ADMIN")
              this.userAdminEmitter.emit(true);
            } else {
              this.modalGenericService.showModal("Seja bem vindo usuário!")
              this.setLocalStorage("roles", "ROLE_USER")
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
