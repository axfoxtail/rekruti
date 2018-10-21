import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoRightContentBarComponent } from './geo-right-content-bar.component';

describe('GeoRightContentBarComponent', () => {
  let component: GeoRightContentBarComponent;
  let fixture: ComponentFixture<GeoRightContentBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoRightContentBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoRightContentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
