import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingMapsModalComponent } from './sourcing-maps-modal.component';

describe('SourcingMapsModalComponent', () => {
  let component: SourcingMapsModalComponent;
  let fixture: ComponentFixture<SourcingMapsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingMapsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingMapsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
