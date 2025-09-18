import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatBoxComponent } from './beat-box-component';

describe('BeatBoxComponent', () => {
  let component: BeatBoxComponent;
  let fixture: ComponentFixture<BeatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
