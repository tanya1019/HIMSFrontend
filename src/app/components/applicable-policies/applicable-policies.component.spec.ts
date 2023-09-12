import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicablePoliciesComponent } from './applicable-policies.component';

describe('ApplicablePoliciesComponent', () => {
  let component: ApplicablePoliciesComponent;
  let fixture: ComponentFixture<ApplicablePoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicablePoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicablePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
