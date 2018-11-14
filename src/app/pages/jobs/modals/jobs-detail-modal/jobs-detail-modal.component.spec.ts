import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsDetailModalComponent } from './jobs-detail-modal.component';

describe('JobsDetailModalComponent', () => {
  let component: JobsDetailModalComponent;
  let fixture: ComponentFixture<JobsDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
