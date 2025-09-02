import { Component, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AudioPlayerService } from '../../services/audio-player-service';

@Component({
  selector: 'app-audio-player-component',
  imports: [
    FormsModule
  ],
  templateUrl: './audio-player-component.html',
  styleUrl: './audio-player-component.scss'
})


export class AudioPlayerComponent implements AfterViewInit {
  @Input() src!: string;

  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioBar', { static: false }) audioBar!: ElementRef<HTMLDivElement>;

  isPlaying = false;
  currentTime = 0;
  duration = 0;

  constructor(private cd: ChangeDetectorRef, public audioPlayerService: AudioPlayerService) {
  }

  ngAfterViewInit(): void {
    
    const audio = this.audioPlayer.nativeElement;

    audio.addEventListener('loadedmetadata', () => {
    this.duration = this.audioPlayer.nativeElement.duration;
    });

    audio.addEventListener('timeupdate', () => {
      this.currentTime = audio.currentTime;
      const percent = (this.currentTime / this.duration) * 100;
      (this.audioBar.nativeElement as HTMLInputElement)
        .style.setProperty('--progress', percent + '%');
      this.cd.detectChanges();
    });
  }

  onSeekPlay() {
    this.audioPlayerService.onSeekPlay();
  }

  onSeekPause() {
    this.audioPlayerService.onSeekPause();
  }

  seek() {
    const time = (this.audioBar.nativeElement as HTMLInputElement).valueAsNumber;
    this.audioPlayer.nativeElement.currentTime = time;
    this.currentTime = time;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}