import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success-component',
  imports: [],
  templateUrl: './success-component.html',
  styleUrl: './success-component.scss'
})
export class SuccessComponent {

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

ngOnInit() {
  const sessionId = this.route.snapshot.queryParamMap.get('session_id');
  if (!sessionId) {
    // pas de session → redirection
    window.location.href = "/";
    return;
  }

  this.http.get(`http://localhost:3000/stripe/verify-payment/${sessionId}`).subscribe((res: any) => {
    if (!res.paid) {
      // paiement non effectué → redirection
      window.location.href = "/";
    } else {
      // paiement OK → afficher le message + lien téléchargement
      console.log("Paiement validé !");
    }
  });
}

}

