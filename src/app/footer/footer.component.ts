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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userAdminEmitter.subscribe(
      show => { this.userAutenticatedAdmin = show }
    );

    this.authService.userEmitter.subscribe(
      show => { this.userAutenticated = show; }
    );
  }

  logout(){
    this.authService.logout();
  }

}
