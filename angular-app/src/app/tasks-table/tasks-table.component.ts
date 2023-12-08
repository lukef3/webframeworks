import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

export class Task {
  _id!: string;
  name!: string;
  category!: string;
  priority!: number;
  dueDate!: string;
}

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {
  tasks: Task[] = [];
  message!: string;

  constructor(private tasksService: TasksService) { }

  private getTasks(): void {
    this.message = 'Fetching tasks...';
    this.tasksService
      .getTasks()
      .then(tasks => {
        this.message = tasks.length > 0 ? '' : 'No tasks found';
        this.tasks = tasks;
      });
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
