import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: {
    id: number,
    dataForName: {};
    dataForAge: {};
    dataForSlary: {};
    gender: string;
    childbed: boolean;
    beneficiaryToAdd: {};
    beneficiaries: {}[];
  };

  constructor() {
    this.user = {
      id: 0,
      dataForName: { type: 'text', model: '', focus: false, label: 'Nombre'},
      dataForAge: { type: 'text', model: '', focus: false, label: 'Edad'},
      dataForSlary: { type: 'text', model: '', focus: false, label: 'Sueldo imponible'},
      gender: '',
      childbed: false,
      beneficiaryToAdd: { dataForAge: { type: 'text', model: '', focus: false, label: 'Edad'} },
      beneficiaries: [{ id: 0, dataForAge: { type: 'text', model: '', focus: false, label: 'Edad'}, gender: ''}]
    };
  }

  ngOnInit() {
  }

}
