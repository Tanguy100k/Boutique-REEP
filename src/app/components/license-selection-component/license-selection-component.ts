import { Component } from '@angular/core';
import { LicenseInfoPanelService } from '../../services/license-info-panel-service';
import { LicenseInfoPanelComponent } from '../license-info-panel-component/license-info-panel-component';
import { ApiService } from '../../services/api-service';
import { UrlBeatIdService } from '../../services/url-beat-id-service';
import { BeatInterface } from '../../interfaces/beat-interface';

type FilesCategory = 'MP3' | 'WAV' | 'STEMS';

// Interface pour typer la license
interface License {
  name: string;
  price: number;
  files: FilesCategory[];
}

@Component({
  selector: 'app-license-selection-component',
  imports: [
    LicenseInfoPanelComponent
],
  templateUrl: './license-selection-component.html',
  styleUrl: './license-selection-component.scss'
})
export class LicenseSelectionComponent {

  licenses: License[] = [
    {
      name: 'Basic',
      price: 23.99,
      files: ['MP3']
    },
    {
      name: 'Standard',
      price: 29.99,
      files: ['MP3', 'WAV']
    },
    {
      name: 'Trackout',
      price: 49.99,
      files: ['MP3', 'WAV', 'STEMS']
    },
    {
      name: 'Unlimited',
      price: 99.99,
      files: ['MP3', 'WAV', 'STEMS']
    },
    {
      name: 'Exclusive',
      price: 999.99,
      files: ['MP3', 'WAV', 'STEMS']
    }
  ];

  selectedLicense: License = this.licenses[0];
  isOpen: boolean = false;

  currentBeat: BeatInterface | null = null;

  constructor(private licenseInfoPanelService: LicenseInfoPanelService, private api: ApiService, private urlBeatIdService: UrlBeatIdService) {
    this.licenseInfoPanelService.isOpen$.subscribe(isOpen => {this.isOpen = isOpen});
    this.urlBeatIdService.currentBeat$.subscribe(b => this.currentBeat = b);
  }

  getFilesString(files: FilesCategory[]): string {
    return files.join(' | ');
  };

  onLicenseSelect(license: License) {
    this.selectedLicense = license;
  };

  togglePanel() {
    this.licenseInfoPanelService.toogle();
  };

  async directPayment() {
    this.api.directPayment(this.currentBeat!.name, this.selectedLicense.name, this.selectedLicense.price * 100);
  }
}
