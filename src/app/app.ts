import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header-component/header-component";
import { BodyComponent } from "./components/body-component/body-component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BodyComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('boutique-reep');
}
