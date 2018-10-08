import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitepagesComponent } from './whitepages.component';

describe('WhitepagesComponent', () => {
  let component: WhitepagesComponent;
  let fixture: ComponentFixture<WhitepagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitepagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
