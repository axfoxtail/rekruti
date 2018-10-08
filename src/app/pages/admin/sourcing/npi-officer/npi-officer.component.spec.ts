import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpiOfficerComponent } from './npi-officer.component';

describe('NpiOfficerComponent', () => {
  let component: NpiOfficerComponent;
  let fixture: ComponentFixture<NpiOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpiOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpiOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
