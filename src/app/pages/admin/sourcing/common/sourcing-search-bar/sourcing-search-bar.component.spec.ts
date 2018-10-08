import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingSearchBarComponent } from './sourcing-search-bar.component';

describe('SourcingSearchBarComponent', () => {
  let component: SourcingSearchBarComponent;
  let fixture: ComponentFixture<SourcingSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
