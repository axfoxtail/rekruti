import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGeoMapModalComponent } from './settings-geo-map-modal.component';

describe('SettingsGeoMapModalComponent', () => {
  let component: SettingsGeoMapModalComponent;
  let fixture: ComponentFixture<SettingsGeoMapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsGeoMapModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeoMapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
