import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingResultsListComponent } from './sourcing-results-list.component';

describe('SourcingResultsListComponent', () => {
  let component: SourcingResultsListComponent;
  let fixture: ComponentFixture<SourcingResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
