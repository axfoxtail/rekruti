import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SovrenResumeComponent } from './sovren-resume.component';

describe('SovrenResumeComponent', () => {
  let component: SovrenResumeComponent;
  let fixture: ComponentFixture<SovrenResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SovrenResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SovrenResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
