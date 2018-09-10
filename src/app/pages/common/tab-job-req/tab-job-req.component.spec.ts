import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabJobReqComponent } from './tab-job-req.component';

describe('TabJobReqComponent', () => {
  let component: TabJobReqComponent;
  let fixture: ComponentFixture<TabJobReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabJobReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabJobReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
