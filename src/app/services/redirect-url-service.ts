import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BeatInterface } from '../interfaces/beat-interface';

@Injectable({
  providedIn: 'root'
})
export class RedirectUrlService {

  constructor(private router: Router) {}
  
  redirectToBeat(beat: BeatInterface) {
    this.router.navigate(['/beat', beat.id]);
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }

}
