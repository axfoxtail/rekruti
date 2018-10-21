import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsHelpBubbleModalComponent } from './settings-help-bubble-modal.component';

describe('SettingsHelpBubbleModalComponent', () => {
  let component: SettingsHelpBubbleModalComponent;
  let fixture: ComponentFixture<SettingsHelpBubbleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsHelpBubbleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsHelpBubbleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
