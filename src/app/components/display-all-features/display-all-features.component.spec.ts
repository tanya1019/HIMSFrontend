import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllFeaturesComponent } from './display-all-features.component';

describe('DisplayAllFeaturesComponent', () => {
  let component: DisplayAllFeaturesComponent;
  let fixture: ComponentFixture<DisplayAllFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
