import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptRightContentBarComponent } from './concept-right-content-bar.component';

describe('ConceptRightContentBarComponent', () => {
  let component: ConceptRightContentBarComponent;
  let fixture: ComponentFixture<ConceptRightContentBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptRightContentBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptRightContentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
