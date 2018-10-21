import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftContentBarComponent } from './left-content-bar.component';

describe('LeftContentBarComponent', () => {
  let component: LeftContentBarComponent;
  let fixture: ComponentFixture<LeftContentBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftContentBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftContentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
