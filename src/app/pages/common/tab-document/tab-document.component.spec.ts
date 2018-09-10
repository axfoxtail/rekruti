import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDocumentComponent } from './tab-document.component';

describe('TabDocumentComponent', () => {
  let component: TabDocumentComponent;
  let fixture: ComponentFixture<TabDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
