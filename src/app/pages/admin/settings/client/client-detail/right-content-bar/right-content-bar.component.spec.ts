import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightContentBarComponent } from './right-content-bar.component';

describe('RightContentBarComponent', () => {
  let component: RightContentBarComponent;
  let fixture: ComponentFixture<RightContentBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightContentBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightContentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
