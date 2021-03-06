import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarModule } from './navbar/navbar.module';
import { AuthService } from './services/auth.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './util/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ModalModule.forRoot(),
    NavbarModule,
    HomeModule,
    SharedModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
