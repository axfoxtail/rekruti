import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGeoAlternatesComponent } from './tab-geo-alternates.component';

describe('TabGeoAlternatesComponent', () => {
  let component: TabGeoAlternatesComponent;
  let fixture: ComponentFixture<TabGeoAlternatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGeoAlternatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGeoAlternatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
