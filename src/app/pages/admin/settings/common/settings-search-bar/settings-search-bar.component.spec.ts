import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSearchBarComponent } from './settings-search-bar.component';

describe('SettingsSearchBarComponent', () => {
  let component: SettingsSearchBarComponent;
  let fixture: ComponentFixture<SettingsSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
