import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveQueryModalComponent } from './save-query-modal.component';

describe('SaveQueryModalComponent', () => {
  let component: SaveQueryModalComponent;
  let fixture: ComponentFixture<SaveQueryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveQueryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveQueryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
