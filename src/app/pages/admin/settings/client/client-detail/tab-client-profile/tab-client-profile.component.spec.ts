import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabClientProfileComponent } from './tab-client-profile.component';

describe('TabClientProfileComponent', () => {
  let component: TabClientProfileComponent;
  let fixture: ComponentFixture<TabClientProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabClientProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabClientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
