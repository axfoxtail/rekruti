import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptInferenceModalComponent } from './concept-inference-modal.component';

describe('ConceptInferenceModalComponent', () => {
  let component: ConceptInferenceModalComponent;
  let fixture: ComponentFixture<ConceptInferenceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptInferenceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptInferenceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
