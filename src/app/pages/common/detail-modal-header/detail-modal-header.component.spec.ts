import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailModalHeaderComponent } from './detail-modal-header.component';

describe('DetailModalHeaderComponent', () => {
  let component: DetailModalHeaderComponent;
  let fixture: ComponentFixture<DetailModalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailModalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
