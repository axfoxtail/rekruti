import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullContactPersonComponent } from './full-contact-person.component';

describe('FullContactPersonComponent', () => {
  let component: FullContactPersonComponent;
  let fixture: ComponentFixture<FullContactPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullContactPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullContactPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
