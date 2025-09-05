import { Component } from '@angular/core';
import { BeatHeadComponent } from '../beat-head-component/beat-head-component';
import { LicenseSelectionComponent } from "../license-selection-component/license-selection-component";

@Component({
  selector: 'app-body-component',
  imports: [
    BeatHeadComponent,
    LicenseSelectionComponent
],
  templateUrl: './body-component.html',
  styleUrl: './body-component.scss'
})
export class BodyComponent {}
