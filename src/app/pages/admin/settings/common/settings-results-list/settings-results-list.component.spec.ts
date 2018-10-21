import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsResultsListComponent } from './settings-results-list.component';

describe('SettingsResultsListComponent', () => {
  let component: SettingsResultsListComponent;
  let fixture: ComponentFixture<SettingsResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
