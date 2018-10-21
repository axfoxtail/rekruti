import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabConceptSemanticComponent } from './tab-concept-semantic.component';

describe('TabConceptSemanticComponent', () => {
  let component: TabConceptSemanticComponent;
  let fixture: ComponentFixture<TabConceptSemanticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabConceptSemanticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabConceptSemanticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
