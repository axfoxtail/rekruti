import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassdoorJobComponent } from './glassdoor-job.component';

describe('GlassdoorJobComponent', () => {
  let component: GlassdoorJobComponent;
  let fixture: ComponentFixture<GlassdoorJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassdoorJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassdoorJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
