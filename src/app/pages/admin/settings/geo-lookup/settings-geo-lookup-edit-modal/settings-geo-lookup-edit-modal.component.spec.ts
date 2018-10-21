import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGeoLookupEditModalComponent } from './settings-geo-lookup-edit-modal.component';

describe('SettingsGeoLookupEditModalComponent', () => {
  let component: SettingsGeoLookupEditModalComponent;
  let fixture: ComponentFixture<SettingsGeoLookupEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsGeoLookupEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeoLookupEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
