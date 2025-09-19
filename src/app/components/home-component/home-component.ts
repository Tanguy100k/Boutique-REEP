import { Component } from '@angular/core';
import { BeatBoxComponent } from '../beat-box-component/beat-box-component';
import { BeatRecommendationsComponent } from '../beat-recommendations-component/beat-recommendations-component';

@Component({
  selector: 'app-home-component',
  imports: [
    BeatRecommendationsComponent
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

}
