import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes =[
{path: '', component : UserComponent},
{ path: 'AddUser', component: AddUserComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
