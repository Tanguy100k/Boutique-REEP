import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar-component/nav-bar-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [
    NavBarComponent,
    FormsModule
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {

  searchTerm: string = '';

  onSearch() {
    console.log(this.searchTerm);
  }

}
