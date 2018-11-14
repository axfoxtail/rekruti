import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesSidebarComponent } from './companies-sidebar.component';

describe('CompaniesSidebarComponent', () => {
  let component: CompaniesSidebarComponent;
  let fixture: ComponentFixture<CompaniesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
