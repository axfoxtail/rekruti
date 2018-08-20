import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersSidebarComponent } from './employers-sidebar.component';

describe('EmployersSidebarComponent', () => {
  let component: EmployersSidebarComponent;
  let fixture: ComponentFixture<EmployersSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
