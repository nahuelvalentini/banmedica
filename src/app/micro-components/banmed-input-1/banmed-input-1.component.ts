import { Component, OnInit, Input } from '@angular/core';
interface Data {
  type: string;
  model: string;
  focus: boolean;
  label: string;
}

@Component({
  selector: 'app-banmed-input-1',
  templateUrl: './banmed-input-1.component.html',
  styleUrls: ['./banmed-input-1.component.scss']
})
export class BanmedInput1Component implements OnInit {
  @Input() data: Data;

  constructor() { }

  ngOnInit() {
  }

}
