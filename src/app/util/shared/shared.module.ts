import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalGenericComponent } from './modal-generic/modal-generic.component';
import { ModalGenericService } from './modal-generic/modal-generic.service';



@NgModule({
  declarations: [ModalGenericComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalGenericComponent],
  entryComponents: [ModalGenericComponent],
  providers: [ModalGenericService]
})
export class SharedModule { }
