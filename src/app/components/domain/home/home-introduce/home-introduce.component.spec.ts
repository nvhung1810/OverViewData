import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroduceComponent } from './home-introduce.component';

describe('HomeIntroduceComponent', () => {
  let component: HomeIntroduceComponent;
  let fixture: ComponentFixture<HomeIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIntroduceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
