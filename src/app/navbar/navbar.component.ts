import { ThrowStmt } from '@angular/compiler';
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
  private contrastActive = true;
  contador = 0
  fontSizeComponent = 14

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userAdminEmitter.subscribe(
      show => { this.userAutenticatedAdmin = show }
    );

    this.authService.userEmitter.subscribe(
      show => { this.userAutenticated = show; }
    );

    sessionStorage.setItem("font-size", (14 + this.contador).toString())
  }

  contrast() {
    var body = window.document.getElementsByTagName("body");
    var navbar = window.document.getElementById("header");
    var accessibility = window.document.getElementById("accessibility");

    if (this.contrastActive) {
      body[0].style.backgroundColor = "black"
      navbar!.style.backgroundColor = "black"
      accessibility!.style.backgroundColor = "black"
    } else {
      body[0].style.backgroundColor = "#3d3d3d"
      navbar!.style.backgroundColor = "#3d3d3d"
      accessibility!.style.backgroundColor = "#00447c"
    }
    this.contrastActive = !this.contrastActive
  }

  defaultFont() {

    if (this.contador > 0) {
      for (let index = this.contador; index > 0; index--) {
        this.decreaseFont()
      }
    } else {
      for (let index = this.contador; index < 0; index++) {
        this.increaseFont()
      }
    }
  }

  increaseFont() {
    var spans = document.getElementsByTagName("span")
    var labels = document.getElementsByTagName("label")
    if (this.contador < 5) {
      for (let index = 0; index < spans.length; index++) {
        var style = window.getComputedStyle(spans[index], null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        spans[index].style.fontSize = (fontSize + 1) + 'px';
      }

      for (let index = 0; index < labels.length; index++) {
        var style = window.getComputedStyle(labels[index], null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        labels[index].style.fontSize = (fontSize + 1) + 'px';
      }
      this.contador++
      sessionStorage.setItem("font-size", (14 + this.contador).toString())
    }
  }

  decreaseFont() {
    var spans = document.getElementsByTagName("span")
    var labels = document.getElementsByTagName("label")
    if (this.contador > -5) {

      for (let index = 0; index < spans.length; index++) {
        var style = window.getComputedStyle(spans[index], null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        spans[index].style.fontSize = (fontSize - 1) + 'px';
      }

      for (let index = 0; index < labels.length; index++) {
        var style = window.getComputedStyle(labels[index], null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        labels[index].style.fontSize = (fontSize - 1) + 'px';
      }
      this.contador--
      sessionStorage.setItem("font-size", (14 + this.contador).toString())
    }
  }
}
