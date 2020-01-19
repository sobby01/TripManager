import { Component, OnInit } from '@angular/core';
import { Hero } from '../_models/user-model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../../shared/repository.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  constructor(
    private repositoryService: RepositoryService,
    private formBuilder: FormBuilder,
    private location: Location
   
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
    this.repositoryService.create('api/User/Add',this.model ).subscribe(
      data => {
        console.log('User created.')
        this.location
      }
    )
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
