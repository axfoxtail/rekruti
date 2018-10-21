import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAccountModalComponent } from './settings-account-modal.component';

describe('SettingsAccountModalComponent', () => {
  let component: SettingsAccountModalComponent;
  let fixture: ComponentFixture<SettingsAccountModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAccountModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
