import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsCompaniesList2Component } from './us-companies-list2.component';

describe('UsCompaniesList2Component', () => {
  let component: UsCompaniesList2Component;
  let fixture: ComponentFixture<UsCompaniesList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsCompaniesList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsCompaniesList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
