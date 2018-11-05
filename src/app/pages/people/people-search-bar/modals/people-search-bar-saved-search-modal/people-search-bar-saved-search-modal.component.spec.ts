import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchBarSavedSearchModalComponent } from './people-search-bar-saved-search-modal.component';

describe('PeopleSearchBarSavedSearchModalComponent', () => {
  let component: PeopleSearchBarSavedSearchModalComponent;
  let fixture: ComponentFixture<PeopleSearchBarSavedSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSearchBarSavedSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSearchBarSavedSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
