import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllCustomerPolicyComponent } from './display-all-customer-policy.component';

describe('DisplayAllCustomerPolicyComponent', () => {
  let component: DisplayAllCustomerPolicyComponent;
  let fixture: ComponentFixture<DisplayAllCustomerPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllCustomerPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllCustomerPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
