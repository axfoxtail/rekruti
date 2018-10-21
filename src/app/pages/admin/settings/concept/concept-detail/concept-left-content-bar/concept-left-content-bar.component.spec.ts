import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptLeftContentBarComponent } from './concept-left-content-bar.component';

describe('ConceptLeftContentBarComponent', () => {
  let component: ConceptLeftContentBarComponent;
  let fixture: ComponentFixture<ConceptLeftContentBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptLeftContentBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptLeftContentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
