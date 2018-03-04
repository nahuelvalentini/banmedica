import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanmedBreadcrumbsComponent } from './banmed-breadcrumbs.component';

describe('BanmedBreadcrumbsComponent', () => {
  let component: BanmedBreadcrumbsComponent;
  let fixture: ComponentFixture<BanmedBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanmedBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanmedBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
