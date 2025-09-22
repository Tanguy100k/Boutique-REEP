import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadLinkService {
  private _downloadUrl = new BehaviorSubject<string>('');
  downloadUrl$ = this._downloadUrl.asObservable();

  constructor(private http: HttpClient) { }

  async generateLink(sessionId: string) {
    const res: any = await firstValueFrom(
      this.http.get(`http://192.168.1.8:3000/download/${sessionId}`)
    );
    this._downloadUrl.next(res.downloadUrl);
  }
}
