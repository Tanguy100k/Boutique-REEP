import { Component } from '@angular/core';
import { LicenseInfoPanelService } from '../../services/license-info-panel-service';
import { LicenseInfoPanelComponent } from '../license-info-panel-component/license-info-panel-component';
import { ApiService } from '../../services/api-service';

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

  constructor(private licenseInfoPanelService: LicenseInfoPanelService, private api: ApiService) {
    this.licenseInfoPanelService.isOpen$.subscribe(isOpen => {this.isOpen = isOpen});
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

  async onClick() {
  try {
    const res = await fetch("http://localhost:3000/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // toujours mettre ce header
      },
      body: JSON.stringify({ beatName: 'Beat', license: this.selectedLicense.name, price: this.selectedLicense.price * 100 })
    });
    const data = await res.json();
    window.location.href = data.url; // redirection vers Stripe Checkout
  } catch (err) {
    console.error("Erreur lors de la création de la session:", err);
  }
}
}
