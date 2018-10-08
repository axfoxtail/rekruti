import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullContactCompanyComponent } from './full-contact-company.component';

describe('FullContactCompanyComponent', () => {
  let component: FullContactCompanyComponent;
  let fixture: ComponentFixture<FullContactCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullContactCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullContactCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
