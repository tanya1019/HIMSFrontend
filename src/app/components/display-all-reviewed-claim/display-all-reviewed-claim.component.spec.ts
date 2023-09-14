import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllReviewedClaimComponent } from './display-all-reviewed-claim.component';

describe('DisplayAllReviewedClaimComponent', () => {
  let component: DisplayAllReviewedClaimComponent;
  let fixture: ComponentFixture<DisplayAllReviewedClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllReviewedClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllReviewedClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
