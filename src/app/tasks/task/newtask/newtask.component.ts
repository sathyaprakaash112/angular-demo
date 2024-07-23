import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = '';

  onCancelled(){
    this.cancel.emit();
  }
}
