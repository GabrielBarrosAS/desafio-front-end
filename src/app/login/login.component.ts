import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../util/dtos/User.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User()

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    this.authService.authenticate(this.user);
  }

}
