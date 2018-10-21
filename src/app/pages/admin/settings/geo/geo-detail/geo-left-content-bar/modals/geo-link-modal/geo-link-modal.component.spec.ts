import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLinkModalComponent } from './geo-link-modal.component';

describe('GeoLinkModalComponent', () => {
  let component: GeoLinkModalComponent;
  let fixture: ComponentFixture<GeoLinkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLinkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
