import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatHeadComponent } from './beat-head-component';

describe('BeatHeadComponent', () => {
  let component: BeatHeadComponent;
  let fixture: ComponentFixture<BeatHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
