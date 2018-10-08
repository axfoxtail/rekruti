import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicarePhysicianComponent } from './medicare-physician.component';

describe('MedicarePhysicianComponent', () => {
  let component: MedicarePhysicianComponent;
  let fixture: ComponentFixture<MedicarePhysicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicarePhysicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicarePhysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
