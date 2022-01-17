import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalGenericComponent } from './modal-generic.component';

@Injectable({
  providedIn: 'root'
})
export class ModalGenericService {


  constructor(private modalService: BsModalService) { }

  showModal(message: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ModalGenericComponent)
    bsModalRef.content.message = message
  }
}
