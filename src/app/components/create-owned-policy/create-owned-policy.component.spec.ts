import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnedPolicyComponent } from './create-owned-policy.component';

describe('CreateOwnedPolicyComponent', () => {
  let component: CreateOwnedPolicyComponent;
  let fixture: ComponentFixture<CreateOwnedPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOwnedPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOwnedPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
