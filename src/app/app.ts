import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header-component/header-component";
import { BodyComponent } from "./components/body-component/body-component";
import { NgxStripeModule } from 'ngx-stripe';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,
    NgxStripeModule,
    RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('boutique-reep');
}
