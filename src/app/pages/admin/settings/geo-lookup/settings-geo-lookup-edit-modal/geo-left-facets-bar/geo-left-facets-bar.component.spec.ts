import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLeftFacetsBarComponent } from './geo-left-facets-bar.component';

describe('GeoLeftFacetsBarComponent', () => {
  let component: GeoLeftFacetsBarComponent;
  let fixture: ComponentFixture<GeoLeftFacetsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLeftFacetsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLeftFacetsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
