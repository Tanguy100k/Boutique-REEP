import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api-service';
import { RedirectUrlService } from '../../services/redirect-url-service';
import { DownloadLinkService } from '../../services/download-link-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-success-component',
  imports: [
    AsyncPipe
  ],
  templateUrl: './success-component.html',
  styleUrl: './success-component.scss'
})
export class SuccessComponent {

  downloadUrl: string = '';

  constructor(private route: ActivatedRoute, public downloadLinkService: DownloadLinkService, private router: Router, private redirectUrlService: RedirectUrlService, private http: HttpClient, private api: ApiService) { }

  async ngOnInit() {
    const sessionId = this.route.snapshot.queryParamMap.get('session_id');
    if (!(await this.api.verifyPayment(sessionId))) {
      this.redirectUrlService.redirectToHome();
      return
    }
    await this.downloadLinkService.generateLink(sessionId!);
  }
}

