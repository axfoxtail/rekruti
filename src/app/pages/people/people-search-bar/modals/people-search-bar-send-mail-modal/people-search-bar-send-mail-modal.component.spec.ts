import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchBarSendMailModalComponent } from './people-search-bar-send-mail-modal.component';

describe('PeopleSearchBarSendMailModalComponent', () => {
  let component: PeopleSearchBarSendMailModalComponent;
  let fixture: ComponentFixture<PeopleSearchBarSendMailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSearchBarSendMailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSearchBarSendMailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
