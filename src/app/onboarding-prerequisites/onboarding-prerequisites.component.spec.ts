import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPrerequisitesComponent } from './onboarding-prerequisites.component';

describe('OnboardingPrerequisitesComponent', () => {
  let component: OnboardingPrerequisitesComponent;
  let fixture: ComponentFixture<OnboardingPrerequisitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnboardingPrerequisitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingPrerequisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
