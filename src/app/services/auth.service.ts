import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { User } from '../util/dtos/User.class';

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

  constructor(private router: Router) { 
    console.log("oi")
  }

  authenticate(user: User){
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
      console.log("Autenticado")
      if (this.userAutenticatedObject.roles?.includes("ROLE_ADMIN")) {
        console.log("Autenticado admin")
        this.userAdminEmitter.emit(true);
      }else{
        console.log("Autenticado normal")
        this.userEmitter.emit(true);
      }
    } else {
      console.log("False")
      this.userAdminEmitter.emit(false);
      this.userEmitter.emit(false);
    }
    this.router.navigate(['/'])
  }
}