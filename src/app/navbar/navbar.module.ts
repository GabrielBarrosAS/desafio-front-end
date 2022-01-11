import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RoutingCategory } from '../home/category/routing/category.routing';
import { RoutingMovies } from '../home/movies/routing/movies.routing';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatIconModule,
    RoutingCategory,
    RoutingMovies
  ],
  exports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    NavbarComponent,
    BrowserAnimationsModule,
  ]
})
export class NavbarModule { }
