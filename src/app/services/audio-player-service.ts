import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  currentAudio: HTMLAudioElement | null = null;
  isPlaying$ = new BehaviorSubject<boolean>(false);

  setCurrentAudio(audio: HTMLAudioElement) {
    this.currentAudio?.pause();
    if (this.currentAudio) {
      this.currentAudio.currentTime = 0;
    }
    this.isPlaying$.next(false);
    this.currentAudio = audio;
  }

  play() {
    this.currentAudio!.play();
    this.isPlaying$.next(true);
  }

  onSeekPlay() {
    if (this.isPlaying$.value) {
      this.play();
    }
  }

  pause() {
    this.currentAudio!.pause();
    this.isPlaying$.next(false);
  }

  onSeekPause() {
    this.currentAudio!.pause();
  }

}

