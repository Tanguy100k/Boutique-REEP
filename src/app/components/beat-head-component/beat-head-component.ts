import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { TooltipComponent } from '../tooltip-component/tooltip-component';
import { AudioPlayerService } from '../../services/audio-player-service';
import { AudioProgressBarComponent } from '../audio-progress-bar-component/audio-progress-bar-component';
import { BeatInterface } from '../../interfaces/beat-interface';

@Component({
  selector: 'app-beat-head-component',
  imports: [
    TooltipComponent,
    AudioProgressBarComponent
  ],
  templateUrl: './beat-head-component.html',
  styleUrl: './beat-head-component.scss'
})
export class BeatHeadComponent {

  currentBeat: BeatInterface = {
    id: '1',
    name: 'Fast Car',
    description: 'Trap x RnB x Drill',
    imgUrl: 'https://i.pinimg.com/1200x/ad/93/d0/ad93d06036af4585897261d753846046.jpg',
    audioUrl: 'Sample.wav',
    key: 'Fm',
    bpm: '140',
    date: 'Sep 2, 2025'
  };
  
  audioSrc = 'Sample.wav'
  audioSrc2 = 'Sample2.wav'

  constructor(public audioPlayerService: AudioPlayerService) {}
}
