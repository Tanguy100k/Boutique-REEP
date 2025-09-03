import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { TooltipComponent } from '../tooltip-component/tooltip-component';
import { AudioPlayerService } from '../../services/audio-player-service';
import { AudioPlayerComponent } from '../audio-player-component/audio-player-component';
import { BeatHeadComponent } from '../beat-head-component/beat-head-component';

@Component({
  selector: 'app-body-component',
  imports: [
    BeatHeadComponent
  ],
  templateUrl: './body-component.html',
  styleUrl: './body-component.scss'
})
export class BodyComponent {}
