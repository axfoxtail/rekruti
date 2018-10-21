import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabConceptDescriptionComponent } from './tab-concept-description.component';

describe('TabConceptDescriptionComponent', () => {
  let component: TabConceptDescriptionComponent;
  let fixture: ComponentFixture<TabConceptDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabConceptDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabConceptDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
