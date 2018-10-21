import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGeoLookupComponent } from './tab-geo-lookup.component';

describe('TabGeoLookupComponent', () => {
  let component: TabGeoLookupComponent;
  let fixture: ComponentFixture<TabGeoLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGeoLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGeoLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
