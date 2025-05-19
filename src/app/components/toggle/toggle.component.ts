import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
  animations: [
    
  ]
})
export class ToggleComponent {

  toggleEmmiter = output<boolean>();
  toggleValue: boolean = false;

  toggleBool(){
    this.toggleValue = !this.toggleValue;
    this.toggleEmmiter.emit(this.toggleValue);
  }
}
