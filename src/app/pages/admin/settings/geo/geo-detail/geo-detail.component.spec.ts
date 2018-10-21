import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoDetailComponent } from './geo-detail.component';

describe('GeoDetailComponent', () => {
  let component: GeoDetailComponent;
  let fixture: ComponentFixture<GeoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
