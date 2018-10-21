import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptInferenceSectionComponent } from './concept-inference-section.component';

describe('ConceptInferenceSectionComponent', () => {
  let component: ConceptInferenceSectionComponent;
  let fixture: ComponentFixture<ConceptInferenceSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptInferenceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptInferenceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
