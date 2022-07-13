import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantListComponent } from './accountant-list.component';

describe('AccountantListComponent', () => {
  let component: AccountantListComponent;
  let fixture: ComponentFixture<AccountantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
