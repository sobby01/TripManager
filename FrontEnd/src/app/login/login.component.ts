import { Component, OnInit } from '@angular/core';
import { Login } from './model/login.model'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { RegisterComponent } from '../register/register.component'
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sub: Subscription;
  public LoginModel : Login = new Login();
  public regModelRef : BsModalRef
  constructor(
    private modalService : BsModalService,
    public modelRef : BsModalRef
  ) { }

  ngOnInit() {
  }

  Login(){
    
  }

  Register(){
    this.modelRef.hide();
    
    this.regModelRef = this.modalService.show(
      RegisterComponent,
      Object.assign({ animated: true, keyboard: true, backdrop: 'static', 
      ignoreBackdropClick: false, ariaHidden: true }, 
      { class: 'mrk-def-modal approve-task-modal modal-dialog-centered' })
    );

    this.sub = this.regModelRef.content.OnRegisterComplete.subscribe(
      result => this.registered(result));
  }

  registered(result : any){
    console.log('results', result);
  }
}
