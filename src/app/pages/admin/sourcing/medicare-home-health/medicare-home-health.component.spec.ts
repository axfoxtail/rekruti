import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareHomeHealthComponent } from './medicare-home-health.component';

describe('MedicareHomeHealthComponent', () => {
  let component: MedicareHomeHealthComponent;
  let fixture: ComponentFixture<MedicareHomeHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicareHomeHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareHomeHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
