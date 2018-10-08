import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareSupplierComponent } from './medicare-supplier.component';

describe('MedicareSupplierComponent', () => {
  let component: MedicareSupplierComponent;
  let fixture: ComponentFixture<MedicareSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicareSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
