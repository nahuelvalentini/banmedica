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
    dataForSalary: {};
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
      dataForSalary: { type: 'text', model: '', focus: false, label: 'Sueldo imponible'},
      gender: '',
      childbed: false,
      beneficiaryToAdd: { dataForAge: { type: 'text', model: '23', focus: false, label: 'Edad'} },
      beneficiaries: [{ id: 0, dataForAge: { type: 'text', model: '28', focus: false, label: 'Edad'}, gender: 'man'}]
    };
  }

  ngOnInit() {
  }
  removeBeneficiary(index) {
    this.user.beneficiaries.splice(index, 1);
  }
  addBeneficiary(beneficiary) {
    const newBeneficiary = JSON.parse(JSON.stringify(beneficiary));
    this.user.beneficiaries.unshift(newBeneficiary);
  }

}
