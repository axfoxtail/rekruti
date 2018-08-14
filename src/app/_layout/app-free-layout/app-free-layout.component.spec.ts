import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFreeLayoutComponent } from './app-free-layout.component';

describe('AppFreeLayoutComponent', () => {
  let component: AppFreeLayoutComponent;
  let fixture: ComponentFixture<AppFreeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFreeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFreeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
