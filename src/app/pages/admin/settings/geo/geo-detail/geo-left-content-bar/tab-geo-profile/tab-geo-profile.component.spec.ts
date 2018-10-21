import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGeoProfileComponent } from './tab-geo-profile.component';

describe('TabGeoProfileComponent', () => {
  let component: TabGeoProfileComponent;
  let fixture: ComponentFixture<TabGeoProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGeoProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGeoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
