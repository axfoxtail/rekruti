import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiplComponent } from './pipl.component';

describe('PiplComponent', () => {
  let component: PiplComponent;
  let fixture: ComponentFixture<PiplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
