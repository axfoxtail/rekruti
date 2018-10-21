import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGeoLookupJsonModalComponent } from './settings-geo-lookup-json-modal.component';

describe('SettingsGeoLookupJsonModalComponent', () => {
  let component: SettingsGeoLookupJsonModalComponent;
  let fixture: ComponentFixture<SettingsGeoLookupJsonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsGeoLookupJsonModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeoLookupJsonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
