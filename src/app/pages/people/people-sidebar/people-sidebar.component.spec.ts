import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSidebarComponent } from './people-sidebar.component';

describe('PeopleSidebarComponent', () => {
  let component: PeopleSidebarComponent;
  let fixture: ComponentFixture<PeopleSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
