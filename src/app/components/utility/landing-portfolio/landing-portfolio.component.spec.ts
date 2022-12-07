import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPortfolioComponent } from './landing-portfolio.component';

describe('LandingPortfolioComponent', () => {
  let component: LandingPortfolioComponent;
  let fixture: ComponentFixture<LandingPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
