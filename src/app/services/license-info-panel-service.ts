import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenseInfoPanelService {

  private isOpen = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpen.asObservable();

  toogle() {
    this.isOpen.next(!this.isOpen.value);
  }
  
}
