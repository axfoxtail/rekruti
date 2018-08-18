import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchBarComponent } from './people-search-bar.component';

describe('PeopleSearchBarComponent', () => {
  let component: PeopleSearchBarComponent;
  let fixture: ComponentFixture<PeopleSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
