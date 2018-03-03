import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanmedInput1Component } from './banmed-input-1.component';

describe('BanmedInput1Component', () => {
  let component: BanmedInput1Component;
  let fixture: ComponentFixture<BanmedInput1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanmedInput1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanmedInput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
