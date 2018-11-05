import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchBarExportCsvModalComponent } from './people-search-bar-export-csv-modal.component';

describe('PeopleSearchBarExportCsvModalComponent', () => {
  let component: PeopleSearchBarExportCsvModalComponent;
  let fixture: ComponentFixture<PeopleSearchBarExportCsvModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSearchBarExportCsvModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSearchBarExportCsvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
