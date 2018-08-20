import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersDetailsModalComponent } from './employers-details-modal.component';

describe('EmployersDetailsModalComponent', () => {
  let component: EmployersDetailsModalComponent;
  let fixture: ComponentFixture<EmployersDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
