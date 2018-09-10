import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNoteComponent } from './tab-note.component';

describe('TabNoteComponent', () => {
  let component: TabNoteComponent;
  let fixture: ComponentFixture<TabNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
