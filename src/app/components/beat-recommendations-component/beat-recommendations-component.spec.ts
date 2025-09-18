import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatRecommendationsComponent } from './beat-recommendations-component';

describe('BeatRecommendationsComponent', () => {
  let component: BeatRecommendationsComponent;
  let fixture: ComponentFixture<BeatRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
