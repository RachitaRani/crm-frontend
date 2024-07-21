import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {

  tasks: Task[] = [];
  task: Task = { title: '', description: '', dueDate: new Date(), priority: 'High', contactId: 0 };
  showTasks: boolean = false;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  onSubmit(): void {
    if (this.task.id) {
      this.taskService.updateTask(this.task.id, this.task).subscribe(() => {
        this.getTasks();
        this.resetForm();
      });
    } else {
      this.taskService.createTask(this.task).subscribe(() => {
        this.getTasks();
        this.resetForm();
      });
    }
  }

  editTask(task: Task): void {
    this.task = { ...task, dueDate: new Date(task.dueDate) };
  }

  deleteTask(id: number | undefined): void {
    if (id !== undefined) {
      this.taskService.deleteTask(id).subscribe(() => this.getTasks());
    }
  }

  resetForm(): void {
    this.task = { title: '', description: '', dueDate: new Date(), priority: 'High', contactId: 0 };
  }
  toggleTasks(): void {
    this.showTasks = !this.showTasks;
  }
}
