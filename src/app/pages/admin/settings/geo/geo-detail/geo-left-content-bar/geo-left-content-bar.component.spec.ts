import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLeftContentBarComponent } from './geo-left-content-bar.component';

describe('GeoLeftContentBarComponent', () => {
  let component: GeoLeftContentBarComponent;
  let fixture: ComponentFixture<GeoLeftContentBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLeftContentBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLeftContentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
