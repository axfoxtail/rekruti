import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConceptModalComponent } from './settings-concept-modal.component';

describe('SettingsConceptModalComponent', () => {
  let component: SettingsConceptModalComponent;
  let fixture: ComponentFixture<SettingsConceptModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConceptModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConceptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
