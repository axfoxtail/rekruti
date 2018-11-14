import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSearchModalComponent } from './saved-search-modal.component';

describe('SavedSearchModalComponent', () => {
  let component: SavedSearchModalComponent;
  let fixture: ComponentFixture<SavedSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
