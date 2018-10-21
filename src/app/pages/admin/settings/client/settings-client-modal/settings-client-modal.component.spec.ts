import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsClientModalComponent } from './settings-client-modal.component';

describe('SettingsClientModalComponent', () => {
  let component: SettingsClientModalComponent;
  let fixture: ComponentFixture<SettingsClientModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsClientModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
