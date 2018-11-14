import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsSidebarComponent } from './jobs-sidebar.component';

describe('JobsSidebarComponent', () => {
  let component: JobsSidebarComponent;
  let fixture: ComponentFixture<JobsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
