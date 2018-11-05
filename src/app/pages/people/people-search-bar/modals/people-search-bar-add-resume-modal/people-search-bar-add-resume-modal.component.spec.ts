import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchBarAddResumeModalComponent } from './people-search-bar-add-resume-modal.component';

describe('PeopleSearchBarAddResumeModalComponent', () => {
  let component: PeopleSearchBarAddResumeModalComponent;
  let fixture: ComponentFixture<PeopleSearchBarAddResumeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSearchBarAddResumeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSearchBarAddResumeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
