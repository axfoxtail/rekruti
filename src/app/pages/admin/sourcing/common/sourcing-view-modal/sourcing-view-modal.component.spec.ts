import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingViewModalComponent } from './sourcing-view-modal.component';

describe('SourcingViewModalComponent', () => {
  let component: SourcingViewModalComponent;
  let fixture: ComponentFixture<SourcingViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
