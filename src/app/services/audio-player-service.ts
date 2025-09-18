import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {
  currentAudio: HTMLAudioElement | null = null;
  currentAudioId: string | null = null;

  _currentTime = new BehaviorSubject<number>(0);
  _duration = new BehaviorSubject<number>(0);
  _progress = new BehaviorSubject<number>(0);
  _isPlaying = new BehaviorSubject<boolean>(false);

  currentTime$ = this._currentTime.asObservable();
  duration$ = this._duration.asObservable();
  progress$ = this._progress.asObservable();

  toggleSound(src?: string, id?: string) {
    if(src && id && id !== this.currentAudioId) {
      this.setCurrentAudio(src, id);
      return;
    }
    if(this._isPlaying.value) {
      this.currentAudio!.pause()
      this._isPlaying.next(false);
    }
    else{
      this.currentAudio!.play();
      this._isPlaying.next(true);
    }

  }
  
  setCurrentAudio(src: string, id: string) {
    if(this.currentAudio) {
      this.currentAudio.pause();
      this._progress.next(0);
      this.currentAudio.src = '';
      this.currentAudio.load();
    }
    this.currentAudio = new Audio(src);
    this.currentAudioId = id;

    this.currentAudio.addEventListener('loadedmetadata', () => {
      this._duration.next(this.currentAudio!.duration)
    });

    this.currentAudio.addEventListener('timeupdate', () => {
      this._currentTime.next(this.currentAudio!.currentTime);
      const percent = (this._currentTime.value / this._duration.value) * 100;
      this._progress.next(percent);
    });
    
    this.currentAudio!.play();
    this._isPlaying.next(true);
  }

  play() {
    this.currentAudio!.play();
    this._isPlaying.next(true);
  }

  onSeekPlay() {
    if (this._isPlaying.value) {
      this.play();
    }
  }

  pause() {
    this.currentAudio!.pause();
    this._isPlaying.next(false);
  }

  onSeekPause() {
    this.currentAudio!.pause();
  }

  seek(time: number) {
  if (this.currentAudio) {
    this.currentAudio.currentTime = time;
    this._currentTime.next(time);
  }
}

}

