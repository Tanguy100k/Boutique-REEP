import { Component, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AudioPlayerService } from '../../services/audio-player-service';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-audio-progress-bar-component',
  imports: [
    FormsModule
  ],
  templateUrl: './audio-progress-bar-component.html',
  styleUrl: './audio-progress-bar-component.scss'
})
export class AudioProgressBarComponent {
  @ViewChild('audioBar', { static: false }) audioBar!: ElementRef<HTMLInputElement>;

  private currentTimeSub: Subscription;
  private durationSub: Subscription;
  private progressSub: Subscription | null = null;

  isPlaying = false;
  currentTime?: number;
  duration?: number;

  constructor(public audioPlayerService: AudioPlayerService, private cd: ChangeDetectorRef) {
    this.currentTimeSub = this.audioPlayerService.currentTime$.subscribe(time => {
      this.currentTime = time;
      this.cd.markForCheck();
    });
    this.durationSub = this.audioPlayerService.duration$.subscribe(duration => this.duration = duration);
  }

  ngAfterViewInit(): void {
    this.progressSub = this.audioPlayerService.progress$.subscribe(
      progress => {
        this.audioBar.nativeElement.style.setProperty('--progress', progress + '%');
    });

  }

  ngOnDestroy(): void {
    this.currentTimeSub.unsubscribe();
    this.durationSub.unsubscribe();
    this.progressSub?.unsubscribe();
  }
}
