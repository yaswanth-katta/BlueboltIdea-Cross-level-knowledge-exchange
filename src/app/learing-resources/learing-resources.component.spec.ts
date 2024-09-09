import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearingResourcesComponent } from './learing-resources.component';

describe('LearingResourcesComponent', () => {
  let component: LearingResourcesComponent;
  let fixture: ComponentFixture<LearingResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearingResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearingResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
