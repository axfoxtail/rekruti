import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabClientBusinessComponent } from './tab-client-business.component';

describe('TabClientBusinessComponent', () => {
  let component: TabClientBusinessComponent;
  let fixture: ComponentFixture<TabClientBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabClientBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabClientBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
