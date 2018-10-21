import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptLookupComponent } from './concept-lookup.component';

describe('ConceptLookupComponent', () => {
  let component: ConceptLookupComponent;
  let fixture: ComponentFixture<ConceptLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
