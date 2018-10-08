import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareDialysisComponent } from './medicare-dialysis.component';

describe('MedicareDialysisComponent', () => {
  let component: MedicareDialysisComponent;
  let fixture: ComponentFixture<MedicareDialysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicareDialysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareDialysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
