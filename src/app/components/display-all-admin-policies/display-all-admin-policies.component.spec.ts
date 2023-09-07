import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllAdminPoliciesComponent } from './display-all-admin-policies.component';

describe('DisplayAllAdminPoliciesComponent', () => {
  let component: DisplayAllAdminPoliciesComponent;
  let fixture: ComponentFixture<DisplayAllAdminPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllAdminPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllAdminPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
