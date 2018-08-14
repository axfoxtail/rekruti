import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFreeLayoutHeaderComponent } from './app-free-layout-header.component';

describe('AppFreeLayoutHeaderComponent', () => {
  let component: AppFreeLayoutHeaderComponent;
  let fixture: ComponentFixture<AppFreeLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFreeLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFreeLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
