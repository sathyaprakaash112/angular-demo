import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './newtask.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Input({required:true}) userId! : string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancelled(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDueDate
    },this.userId
    );
    this.close.emit();
  }
}
