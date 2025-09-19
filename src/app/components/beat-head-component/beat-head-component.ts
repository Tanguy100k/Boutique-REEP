import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { TooltipComponent } from '../tooltip-component/tooltip-component';
import { AudioPlayerService } from '../../services/audio-player-service';
import { AudioProgressBarComponent } from '../audio-progress-bar-component/audio-progress-bar-component';
import { BeatInterface } from '../../interfaces/beat-interface';
import { BeatBoxComponent } from "../beat-box-component/beat-box-component";
import { UrlBeatIdService } from '../../services/url-beat-id-service';

@Component({
  selector: 'app-beat-head-component',
  imports: [
    TooltipComponent,
    AudioProgressBarComponent,
    BeatBoxComponent
],
  templateUrl: './beat-head-component.html',
  styleUrl: './beat-head-component.scss'
})
export class BeatHeadComponent {

  currentBeat: BeatInterface | null = null;

  audioSrc = 'Sample.wav'
  audioSrc2 = 'Sample2.wav'

  constructor(public audioPlayerService: AudioPlayerService, private urlBeatIdService: UrlBeatIdService) {
    this.urlBeatIdService.currentBeat$.subscribe(b => this.currentBeat = b)
  }
}
