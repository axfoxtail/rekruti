import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrystalComponent } from './krystal.component';

describe('KrystalComponent', () => {
  let component: KrystalComponent;
  let fixture: ComponentFixture<KrystalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrystalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrystalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
