import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailModalContentComponent } from './detail-modal-content.component';

describe('DetailModalContentComponent', () => {
  let component: DetailModalContentComponent;
  let fixture: ComponentFixture<DetailModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
