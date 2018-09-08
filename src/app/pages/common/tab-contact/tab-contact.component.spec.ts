import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContactComponent } from './tab-contact.component';

describe('TabContactComponent', () => {
  let component: TabContactComponent;
  let fixture: ComponentFixture<TabContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
