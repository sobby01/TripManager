import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  rows = [];

  persons: any[] = [
    {"id": "1", "username": "SaSingh", "name": "Saurabh Singh","email":'saurabhjnumca@gmail.com', "mobile": '89684888112', "dob": '1986-03-04', "Total": 5000},
    { "id": "2","username": "vakumar", "name": "Varinder Kumar","email":'vakumar@gmail.com', "mobile": '9880033445', "dob": '1990-01-11', "Total": 5000 }
  ];

  constructor() { 
    this.rows = this.persons;
    
  }

  ngOnInit() {
  }

}
