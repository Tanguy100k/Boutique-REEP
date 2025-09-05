import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioProgressBarComponent } from './audio-progress-bar-component';

describe('AudioProgressBarComponent', () => {
  let component: AudioProgressBarComponent;
  let fixture: ComponentFixture<AudioProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioProgressBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
