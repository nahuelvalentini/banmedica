import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataForInput: {} = { type: 'text', model: '', focus: false, label: 'Es el título'};
  constructor() {
  }
  ngOnInit() {
  }

}
