import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabClientTemplatesComponent } from './tab-client-templates.component';

describe('TabClientTemplatesComponent', () => {
  let component: TabClientTemplatesComponent;
  let fixture: ComponentFixture<TabClientTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabClientTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabClientTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
