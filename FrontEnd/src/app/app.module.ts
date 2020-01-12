import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule, ModalModule, PaginationModule, 
  DatepickerModule, TabsModule } from 'ngx-bootstrap'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'

import { UserComponent } from './user/user.component';
import { TripsComponent } from './trips/trips.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TripsComponent,
    ExpenseDetailsComponent,
    LoginComponent,
    RegisterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule,
    DatepickerModule,
    TabsModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  entryComponents: [LoginComponent, RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
