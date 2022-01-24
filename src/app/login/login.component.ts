import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../util/dtos/UserDtos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User()
  font_size = 14

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.font_size = Number(sessionStorage.getItem("font-size"))
  }

  fazerLogin() {
    this.authService.authenticate(this.user);
  }

}
