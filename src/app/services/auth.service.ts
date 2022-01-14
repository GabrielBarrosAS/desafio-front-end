import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { User } from '../util/dtos/User.class';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [
    new User("admin@admin.com", "password", ["ROLE_USER", "ROLE_ADMIN"]),
    new User("user@user.com", "password", ["ROLE_USER"])
  ]

  private userIsAutenticated: boolean = false
  private userAutenticatedObject: User = new User()
  userAdminEmitter = new EventEmitter<boolean>();
  userEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  getUsername(): string {
    return this.userAutenticatedObject.email
  }

  getPassword(): string {
    return this.userAutenticatedObject.senha
  }

  headerOptions(){
    let authorizationData = 'Basic ' + btoa(this.getUsername() + ':' + this.getPassword());

    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': authorizationData
      })
    };
    return headerOptions
  }

  authenticate(user: User) {
    this.userAdminEmitter.emit(false);
    this.userEmitter.emit(false);
    this.userIsAutenticated = false
    this.users.forEach(el => {
      if (el.email === user.email && el.senha === user.senha && !this.userIsAutenticated) {
        this.userIsAutenticated = true
        this.userAutenticatedObject = el
      }
    })

    if (this.userIsAutenticated) {
      if (this.userAutenticatedObject.roles?.includes("ROLE_ADMIN")) {
        this.userAdminEmitter.emit(true);
      } else {
        this.userEmitter.emit(true);
      }
    } else {
      this.userAdminEmitter.emit(false);
      this.userEmitter.emit(false);
    }
    this.router.navigate(['/'])
  }
}
