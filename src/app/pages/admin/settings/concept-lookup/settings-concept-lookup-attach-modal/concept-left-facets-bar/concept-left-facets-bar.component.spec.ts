import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptLeftFacetsBarComponent } from './concept-left-facets-bar.component';

describe('ConceptLeftFacetsBarComponent', () => {
  let component: ConceptLeftFacetsBarComponent;
  let fixture: ComponentFixture<ConceptLeftFacetsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptLeftFacetsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptLeftFacetsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
