import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConceptLookupAttachModalComponent } from './settings-concept-lookup-attach-modal.component';

describe('SettingsConceptLookupAttachModalComponent', () => {
  let component: SettingsConceptLookupAttachModalComponent;
  let fixture: ComponentFixture<SettingsConceptLookupAttachModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConceptLookupAttachModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConceptLookupAttachModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
