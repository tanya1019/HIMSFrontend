import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllClaimsComponent } from './display-all-claims.component';

describe('DisplayAllClaimsComponent', () => {
  let component: DisplayAllClaimsComponent;
  let fixture: ComponentFixture<DisplayAllClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllClaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
