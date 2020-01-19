import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserRoutingModule } from './user-routing.module';
 
@NgModule({
    declarations: [
        AddUserComponent,
        UserComponent
    ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[
    AddUserComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }