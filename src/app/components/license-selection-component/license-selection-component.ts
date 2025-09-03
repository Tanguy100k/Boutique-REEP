import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

type FilesCategory = 'MP3' | 'WAV' | 'STEMS';

// Interface pour typer la license
interface License {
  name: string;
  price: number;
  files: FilesCategory[];
}

@Component({
  selector: 'app-license-selection-component',
  imports: [],
  templateUrl: './license-selection-component.html',
  styleUrl: './license-selection-component.scss'
})
export class LicenseSelectionComponent {

  ngAfterViewInit(): void {
    const btn = document.querySelector('button.arrow');

    btn!.addEventListener('click', () => {
    btn!.classList.toggle('flip'); // ajoute/enlève la classe à chaque clic
});
  }

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
    },
  ];

  selectedLicense: License = this.licenses[0];
  isDeployed: boolean = false;


  getFilesString(files: FilesCategory[]): string {
    return files.join(' | ');
  }

  onLicenseSelect(license: License) {
    this.selectedLicense = license;
    console.log(this.selectedLicense)
  }
}
