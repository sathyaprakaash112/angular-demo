import { Component, EventEmitter, input, Input, output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewtaskComponent } from "./task/newtask/newtask.component";
import { type NewTaskData } from './task/newtask/newtask.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  

  constructor(private tasksService:TasksService){
  }

  @Input({required:true}) userId! : string;
  @Input({required:true}) name!:string;
  isAddingTask = false;
  

get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId);
}

onAddTask() {
  this.isAddingTask = true;
}

onCloseAddTask(){
  this.isAddingTask = false;
}


}
