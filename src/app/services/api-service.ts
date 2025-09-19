// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  test(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test`, { responseType: 'text' });
  }

  async directPayment(beatName: string, license: string, price: number) {
  try {
    const res = await fetch("http://localhost:3000/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // toujours mettre ce header
      },
      body: JSON.stringify({ beatName, license, price})
    });
    const data = await res.json();
    window.location.href = data.url; // redirection vers Stripe Checkout
  } catch (err) {
    console.error("Erreur lors de la création de la session:", err);
  }
}

async verifyPayment(sessionId: string | null): Promise<boolean> {
  const res: any = await firstValueFrom(
    this.http.get(`http://localhost:3000/stripe/verify-payment/${sessionId}`)
  );
  return res.paid;
}
}
