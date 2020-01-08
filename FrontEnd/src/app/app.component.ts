import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  private modalRef: BsModalRef
  constructor(
    private modalService: BsModalService,
    
  ) { }

  ngOnInit() {
  }

  Login(){
    const initialState = {
      Name: 'Hello',
    };
    this.modalRef = this.modalService.show(
      LoginComponent,
      Object.assign({ animated: true, keyboard: true, backdrop: 'static', ignoreBackdropClick: false, ariaHidden: true }, { class: 'mrk-def-modal approve-task-modal modal-dialog-centered' }, { initialState })
    );
  }

}