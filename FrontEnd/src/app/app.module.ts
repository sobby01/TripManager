import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule, ModalModule, PaginationModule, 
  DatepickerModule, TabsModule } from 'ngx-bootstrap'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'

import { UserComponent } from './user/user.component';
import { TripsComponent } from './trips/trips.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TripsComponent,
    ExpenseDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
    ModalModule,
    PaginationModule,
    DatepickerModule,
    TabsModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
