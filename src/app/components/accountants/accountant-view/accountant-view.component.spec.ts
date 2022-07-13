import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantViewComponent } from './accountant-view.component';

describe('AccountantViewComponent', () => {
  let component: AccountantViewComponent;
  let fixture: ComponentFixture<AccountantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
