import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Output() cancel = new EventEmitter<void>();

  onCancelled(){
    this.cancel.emit();
  }
}
