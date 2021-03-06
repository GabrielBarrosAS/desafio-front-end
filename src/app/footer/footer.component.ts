import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  userAutenticatedAdmin: boolean = false;
  userAutenticated: boolean = false;
  font_size = 14

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userAdminEmitter.subscribe(
      show => {
        this.userAutenticatedAdmin = show
        this.font_size = Number(sessionStorage.getItem("font-size"))
      }
    );

    this.authService.userEmitter.subscribe(
      show => {
        this.userAutenticated = show;
        this.font_size = Number(sessionStorage.getItem("font-size"))
      }
    );
    this.font_size = Number(sessionStorage.getItem("font-size"))
  }

  logout() {
    this.authService.logout();
  }

}
