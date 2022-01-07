import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
