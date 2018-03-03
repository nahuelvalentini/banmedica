import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanmedInputComponent } from './banmed-input.component';

describe('BanmedInputComponent', () => {
  let component: BanmedInputComponent;
  let fixture: ComponentFixture<BanmedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanmedInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanmedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
