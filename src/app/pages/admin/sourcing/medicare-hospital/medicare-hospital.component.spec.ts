import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareHospitalComponent } from './medicare-hospital.component';

describe('MedicareHospitalComponent', () => {
  let component: MedicareHospitalComponent;
  let fixture: ComponentFixture<MedicareHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicareHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
