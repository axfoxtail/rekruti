import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingSidebarComponent } from './sourcing-sidebar.component';

describe('SourcingSidebarComponent', () => {
  let component: SourcingSidebarComponent;
  let fixture: ComponentFixture<SourcingSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
