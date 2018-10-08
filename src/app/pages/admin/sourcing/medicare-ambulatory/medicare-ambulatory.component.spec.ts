import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareAmbulatoryComponent } from './medicare-ambulatory.component';

describe('MedicareAmbulatoryComponent', () => {
  let component: MedicareAmbulatoryComponent;
  let fixture: ComponentFixture<MedicareAmbulatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicareAmbulatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareAmbulatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
