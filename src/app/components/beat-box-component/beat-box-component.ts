import { Component, Input } from '@angular/core';
import { BeatInterface } from '../../interfaces/beat-interface';
import { AudioPlayerService } from '../../services/audio-player-service';

@Component({
  selector: 'app-beat-box-component',
  imports: [],
  templateUrl: './beat-box-component.html',
  styleUrl: './beat-box-component.scss'
})
export class BeatBoxComponent {

  @Input() beat: BeatInterface | null = null;

  constructor(public audioPlayerService: AudioPlayerService) {}
}
