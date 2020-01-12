import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  rows = [];

  @ViewChild('modalClose', {static: false}) modalClose:ElementRef;
  persons: any[] = [
    {"id": "1", "TripManager": "Aaron 2Moore", "TripDestination": "Regional Configuration Producer", "NoOfPeople": 4, "date": '2020-01-11', "Total": 5000},
    { "id": "2","TripManager": "Yvonne Conroy Mrs.", "TripDestination": "Global Mobility Orchestrator", "NoOfPeople": 4, "date": '2020-01-11', "Total": 5000 }
  ];
  constructor() { }

  ngOnInit() {
    this.rows = this.persons;
  }

}
