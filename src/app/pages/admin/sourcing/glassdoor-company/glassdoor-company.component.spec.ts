import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassdoorCompanyComponent } from './glassdoor-company.component';

describe('GlassdoorCompanyComponent', () => {
  let component: GlassdoorCompanyComponent;
  let fixture: ComponentFixture<GlassdoorCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassdoorCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassdoorCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
