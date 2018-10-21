import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLookupComponent } from './geo-lookup.component';

describe('GeoLookupComponent', () => {
  let component: GeoLookupComponent;
  let fixture: ComponentFixture<GeoLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
