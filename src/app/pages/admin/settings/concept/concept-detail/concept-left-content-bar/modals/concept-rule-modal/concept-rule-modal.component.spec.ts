import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptRuleModalComponent } from './concept-rule-modal.component';

describe('ConceptRuleModalComponent', () => {
  let component: ConceptRuleModalComponent;
  let fixture: ComponentFixture<ConceptRuleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptRuleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptRuleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
