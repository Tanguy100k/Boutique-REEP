import { Component } from '@angular/core';
import { LicenseInfoPanelService } from '../../services/license-info-panel-service';

@Component({
  selector: 'app-license-info-panel-component',
  imports: [],
  templateUrl: './license-info-panel-component.html',
  styleUrl: './license-info-panel-component.scss'
})
export class LicenseInfoPanelComponent {

  isOpen = false;

  constructor(private licenseInfoPanelService: LicenseInfoPanelService) {
    this.licenseInfoPanelService.isOpen$.subscribe(isOpen => {this.isOpen = isOpen})
  }

}
