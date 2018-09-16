import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFullComponent } from './people-full.component';

describe('PeopleFullComponent', () => {
  let component: PeopleFullComponent;
  let fixture: ComponentFixture<PeopleFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
