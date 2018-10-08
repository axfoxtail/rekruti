import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareNursingHomeComponent } from './medicare-nursing-home.component';

describe('MedicareNursingHomeComponent', () => {
  let component: MedicareNursingHomeComponent;
  let fixture: ComponentFixture<MedicareNursingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicareNursingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareNursingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
