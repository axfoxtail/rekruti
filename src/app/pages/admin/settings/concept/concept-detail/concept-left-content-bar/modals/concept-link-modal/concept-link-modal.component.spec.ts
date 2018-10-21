import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptLinkModalComponent } from './concept-link-modal.component';

describe('ConceptLinkModalComponent', () => {
  let component: ConceptLinkModalComponent;
  let fixture: ComponentFixture<ConceptLinkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptLinkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
