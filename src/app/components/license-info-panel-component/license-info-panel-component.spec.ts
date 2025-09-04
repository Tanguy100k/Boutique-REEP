import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseInfoPanelComponent } from './license-info-panel-component';

describe('LicenseInfoPanelComponent', () => {
  let component: LicenseInfoPanelComponent;
  let fixture: ComponentFixture<LicenseInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseInfoPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
