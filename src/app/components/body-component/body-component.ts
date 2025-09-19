import { Component, Input } from '@angular/core';
import { BeatHeadComponent } from '../beat-head-component/beat-head-component';
import { LicenseSelectionComponent } from "../license-selection-component/license-selection-component";
import { BeatRecommendationsComponent } from '../beat-recommendations-component/beat-recommendations-component';
import { ReepContactBoxComponent } from '../reep-contact-box-component/reep-contact-box-component';

@Component({
  selector: 'app-body-component',
  imports: [
    BeatHeadComponent,
    LicenseSelectionComponent,
    BeatRecommendationsComponent,
    ReepContactBoxComponent
],
  templateUrl: './body-component.html',
  styleUrl: './body-component.scss'
})
export class BodyComponent {
}
