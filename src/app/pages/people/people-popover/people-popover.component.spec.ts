import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePopoverComponent } from './people-popover.component';

describe('PeoplePopoverComponent', () => {
  let component: PeoplePopoverComponent;
  let fixture: ComponentFixture<PeoplePopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplePopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
