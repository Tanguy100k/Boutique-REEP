import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { TooltipComponent } from '../tooltip-component/tooltip-component';
import { AudioPlayerService } from '../../services/audio-player-service';
import { AudioPlayerComponent } from '../audio-player-component/audio-player-component';

@Component({
  selector: 'app-beat-head-component',
  imports: [
    TooltipComponent,
    AudioPlayerComponent
  ],
  templateUrl: './beat-head-component.html',
  styleUrl: './beat-head-component.scss'
})
export class BeatHeadComponent {

  @ViewChildren(AudioPlayerComponent) audioPlayers!: QueryList<AudioPlayerComponent>;

  audioSrc = 'Sample.wav'
  audioSrc2 = 'Sample2.wav'

  constructor(public audioPlayerService: AudioPlayerService) {}

  toogleAudio(audioPlayer?: AudioPlayerComponent) {
    if(audioPlayer!.audioPlayer.nativeElement != this.audioPlayerService.currentAudio) {
      this.audioPlayerService.setCurrentAudio(audioPlayer!.audioPlayer.nativeElement);
      this.audioPlayers.forEach(p => { p.isPlaying = false; } );
    }
    if(this.audioPlayerService.isPlaying$.value) {
      this.audioPlayerService.pause();
      audioPlayer!.isPlaying = false;
    } else {
      this.audioPlayerService.play();
      audioPlayer!.isPlaying = true;
    }
  }

}
