import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseUsaComponent } from './database-usa.component';

describe('DatabaseUsaComponent', () => {
  let component: DatabaseUsaComponent;
  let fixture: ComponentFixture<DatabaseUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
