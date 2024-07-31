import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task-model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Task>();

  task: string = '';
  category: string = '';
  concluded: boolean = false;

  onSubmit() {
    if (!this.task) {
      alert('Adicione uma tarefa!');
      return;
    }

    const newTask = {
      task: this.task,
      category: this.category,
      concluded: this.concluded,
    };

    this.onAddTask.emit(newTask);

    this.task = '';
    this.category = '';
    this.concluded = false;
  }
}
