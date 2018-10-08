import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsCompaniesListComponent } from './us-companies-list.component';

describe('UsCompaniesListComponent', () => {
  let component: UsCompaniesListComponent;
  let fixture: ComponentFixture<UsCompaniesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsCompaniesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsCompaniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
