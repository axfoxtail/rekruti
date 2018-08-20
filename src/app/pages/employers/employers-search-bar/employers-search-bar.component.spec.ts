import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersSearchBarComponent } from './employers-search-bar.component';

describe('EmployersSearchBarComponent', () => {
  let component: EmployersSearchBarComponent;
  let fixture: ComponentFixture<EmployersSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
