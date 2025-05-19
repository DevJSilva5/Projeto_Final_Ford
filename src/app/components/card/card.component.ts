import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Input() width!: string;
  @Input() height!: string;

  CardboxToggle = true;

  ToggleCardbox() {
    this.CardboxToggle = !this.CardboxToggle;
  }
}
