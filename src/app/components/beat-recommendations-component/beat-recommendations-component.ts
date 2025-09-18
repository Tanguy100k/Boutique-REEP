import { Component } from '@angular/core';
import { BeatBoxComponent } from "../beat-box-component/beat-box-component";
import { BeatInterface } from '../../interfaces/beat-interface';

@Component({
  selector: 'app-beat-recommendations-component',
  imports: [BeatBoxComponent],
  templateUrl: './beat-recommendations-component.html',
  styleUrl: './beat-recommendations-component.scss'
})
export class BeatRecommendationsComponent {

  beat1: BeatInterface = {
      id: '1',
      name: 'Fast Car',
      description: 'Trap x RnB x Drill',
      imgUrl: 'https://i.pinimg.com/1200x/ad/93/d0/ad93d06036af4585897261d753846046.jpg',
      audioUrl: 'Sample.wav',
      key: 'Fm',
      bpm: '140',
      date: 'Sep 2, 2025'
    };

    beat2: BeatInterface = {
        id: '2',
        name: 'Slow Car',
        description: 'Afro x Electro',
        imgUrl: 'https://i.pinimg.com/1200x/aa/8e/a3/aa8ea3536ae76bc9a3e13e5d0d1c802e.jpg',
        audioUrl: 'Sample2.wav',
        key: 'Em',
        bpm: '126',
        date: 'Aug 4, 2025'
      };

}
