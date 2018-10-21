import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGeoLookupMapModalComponent } from './settings-geo-lookup-map-modal.component';

describe('SettingsGeoLookupMapModalComponent', () => {
  let component: SettingsGeoLookupMapModalComponent;
  let fixture: ComponentFixture<SettingsGeoLookupMapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsGeoLookupMapModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeoLookupMapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
