import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabConceptLookupComponent } from './tab-concept-lookup.component';

describe('TabConceptLookupComponent', () => {
  let component: TabConceptLookupComponent;
  let fixture: ComponentFixture<TabConceptLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabConceptLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabConceptLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
