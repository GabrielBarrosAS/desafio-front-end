import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './util/User.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users:User[] = [
    new User("admin@admin.com","password"),
    new User("user@user.com","password")
  ]

  private userAutenticated: boolean = false

  constructor(private router: Router) { }

  authenticate(user:User) : boolean{
    this.userAutenticated = false
    var length = this.users.forEach(el => {
        if (el.email === user.email && el.senha === user.senha && !this.userAutenticated) {
          this.userAutenticated = true
          this.router.navigate(['/'])
          alert("Usuario autenticado")
        }
      })
    
      return this.userAutenticated
  }
}
