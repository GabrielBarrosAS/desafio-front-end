import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  userAutenticatedAdmin: boolean = false;
  userAutenticated: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userAdminEmitter.subscribe(
      show => { this.userAutenticatedAdmin = show }
    );

    this.authService.userEmitter.subscribe(
      show => { this.userAutenticated = show; }
    );
  }

}
