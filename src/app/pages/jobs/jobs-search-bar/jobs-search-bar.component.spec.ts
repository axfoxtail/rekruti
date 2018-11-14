import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsSearchBarComponent } from './jobs-search-bar.component';

describe('JobsSearchBarComponent', () => {
  let component: JobsSearchBarComponent;
  let fixture: ComponentFixture<JobsSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
