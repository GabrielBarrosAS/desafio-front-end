import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.css']
})
export class ModalGenericComponent implements OnInit {

  @Input() message: string = ""

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  hide(){
    this.bsModalRef.hide()
  }

}
