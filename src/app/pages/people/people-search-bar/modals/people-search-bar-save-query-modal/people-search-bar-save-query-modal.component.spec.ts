import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchBarSaveQueryModalComponent } from './people-search-bar-save-query-modal.component';

describe('PeopleSearchBarSaveQueryModalComponent', () => {
  let component: PeopleSearchBarSaveQueryModalComponent;
  let fixture: ComponentFixture<PeopleSearchBarSaveQueryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSearchBarSaveQueryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSearchBarSaveQueryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
