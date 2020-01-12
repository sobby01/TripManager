import { Component, OnInit,Output , EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  @Output() OnRegisterComplete = new EventEmitter();

  constructor(
    public modalRef: BsModalRef,
    public modalService: BsModalService
  ) { }

  ngOnInit() {

  }

  Register(){
    console.log('Register method called');
    this.OnRegisterComplete.emit(true);
    this.modalRef.hide();
  }
}
