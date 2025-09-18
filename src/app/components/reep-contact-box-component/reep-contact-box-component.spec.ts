import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReepContactBoxComponent } from './reep-contact-box-component';

describe('ReepContactBoxComponent', () => {
  let component: ReepContactBoxComponent;
  let fixture: ComponentFixture<ReepContactBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReepContactBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReepContactBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
