import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantEditComponent } from './accountant-edit.component';

describe('AccountantEditComponent', () => {
  let component: AccountantEditComponent;
  let fixture: ComponentFixture<AccountantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
