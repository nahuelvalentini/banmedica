import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataForName: {};
  dataForAge: {};
  dataForSlary: {};
  gender: string;
  childbed: boolean;

  constructor() {
    this.dataForName = { type: 'text', model: '', focus: false, label: 'Nombre'};
    this.dataForAge = { type: 'text', model: '', focus: false, label: 'Edad'};
    this.dataForSlary = { type: 'text', model: '', focus: false, label: 'Sueldo imponible'};
    this.gender = '';
    this.childbed = false;
  }

  ngOnInit() {
  }

}
