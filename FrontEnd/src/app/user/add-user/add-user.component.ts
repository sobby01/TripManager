import { Component, OnInit } from '@angular/core';
import { Hero } from '../_models/user-model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {

    console.log('insideadd user');
   }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      Name: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Mobile: ['', Validators.required],
      Address: ['', Validators.required]
  });
  }
  model = new Hero('sasingh','Saurabh','Singh','8968488112','saurabhjnumca@gmail.com','d102 Chandigarh');
   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() 
  {
     this.submitted = true;
  }

  newHero() {
    this.model = new Hero('','','','','','');
  }

  showFormControls(form: any) {
    return form && form.controls['Name'] &&
    form.controls['Name'].value; // Dr. IQ
  }


}
