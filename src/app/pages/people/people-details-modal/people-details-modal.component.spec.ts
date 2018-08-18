import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailsModalComponent } from './people-details-modal.component';

describe('PeopleDetailsModalComponent', () => {
  let component: PeopleDetailsModalComponent;
  let fixture: ComponentFixture<PeopleDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
