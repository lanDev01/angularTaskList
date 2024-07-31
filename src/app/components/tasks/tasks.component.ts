import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task-model';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  listTasks: Task[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.getListTasks();
  }

  getListTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.listTasks = data;
    });
  }

  deleteTask(task: Task) {
    console.log(task);
    this.taskService.deleteTask(task).subscribe(() => {
      this.listTasks = this.listTasks.filter((t) => t.id == task.id);
    });
  }

  toggleConcluded(task: Task) {
    task.concluded = !task.concluded;

    this.taskService.updateTask(task).subscribe()
  }
}
