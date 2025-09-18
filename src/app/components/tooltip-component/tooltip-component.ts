import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip-component',
  imports: [],
  templateUrl: './tooltip-component.html',
  styleUrl: './tooltip-component.scss'
})
export class TooltipComponent {
  @Input() text: string = '';
}
