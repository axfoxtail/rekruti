import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabClientAccountsComponent } from './tab-client-accounts.component';

describe('TabClientAccountsComponent', () => {
  let component: TabClientAccountsComponent;
  let fixture: ComponentFixture<TabClientAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabClientAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabClientAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
