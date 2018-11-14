import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendByMailModalComponent } from './send-by-mail-modal.component';

describe('SendByMailModalComponent', () => {
  let component: SendByMailModalComponent;
  let fixture: ComponentFixture<SendByMailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendByMailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendByMailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
