import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailModalComponent } from './company-detail-modal.component';

describe('CompanyDetailModalComponent', () => {
  let component: CompanyDetailModalComponent;
  let fixture: ComponentFixture<CompanyDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
