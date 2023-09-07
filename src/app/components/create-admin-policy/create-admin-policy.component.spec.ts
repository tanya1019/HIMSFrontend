import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminPolicyComponent } from './create-admin-policy.component';

describe('CreateAdminPolicyComponent', () => {
  let component: CreateAdminPolicyComponent;
  let fixture: ComponentFixture<CreateAdminPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdminPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdminPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
