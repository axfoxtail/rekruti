import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleEditModalComponent } from './people-edit-modal.component';

describe('PeopleEditModalComponent', () => {
  let component: PeopleEditModalComponent;
  let fixture: ComponentFixture<PeopleEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
