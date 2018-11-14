import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEditModalComponent } from './detail-edit-modal.component';

describe('DetailEditModalComponent', () => {
  let component: DetailEditModalComponent;
  let fixture: ComponentFixture<DetailEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
