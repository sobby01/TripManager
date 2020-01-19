import { Component, OnInit } from '@angular/core';
import { UserModel } from '../_models/user-model'
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  submitted = false;
  model = {} as UserModel;
  constructor() {

    console.log('insideadd user');
   }

  ngOnInit() {
  }

  onSubmit() 
  {
     this.submitted = true;
  }

  newHero() {
    this.model = new UserModel('','','','','','');
  }

  showFormControls(form: any) {
    return form && form.controls['Name'] &&
    form.controls['Name'].value; // Dr. IQ
  }


}
