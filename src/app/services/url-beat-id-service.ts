import { Injectable } from '@angular/core';
import { BeatInterface } from '../interfaces/beat-interface';
import { BehaviorSubject, filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class UrlBeatIdService {

  beats: BeatInterface[] = [{
    id: '1',
    name: 'Fast Car',
    description: 'Trap x RnB x Drill',
    imgUrl: 'https://i.pinimg.com/1200x/ad/93/d0/ad93d06036af4585897261d753846046.jpg',
    audioUrl: 'Prod1.mp3',
    key: 'Fm',
    bpm: '140',
    date: 'Sep 2, 2025'
  },
  {
    id: '2',
    name: 'Slow Car',
    description: 'Afro x Electro',
    imgUrl: 'https://i.pinimg.com/1200x/aa/8e/a3/aa8ea3536ae76bc9a3e13e5d0d1c802e.jpg',
    audioUrl: 'Prod2.mp3',
    key: 'Em',
    bpm: '126',
    date: 'Aug 4, 2025'
  }];

  _currentBeat = new BehaviorSubject<BeatInterface | null>(null);
  currentBeat$ = this._currentBeat.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const tree = this.router.parseUrl(this.router.url);
        const id = tree.root.children['primary']?.segments[1]?.path;
        if (id) this.setBeatById(id);
      });
  }

  setBeatById(id: string) {
    const beat = this.beats.find(b => b.id === id) || null;
    if(beat) this._currentBeat.next(beat);
    else this.router.navigate([''])
  }

}
