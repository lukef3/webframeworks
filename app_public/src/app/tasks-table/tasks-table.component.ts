// tasks-table.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../table-data.service';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {
  tasks: any[] = [];
  pageHeader = { tasksTitle: 'Your Tasks' };

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data;
      },
      (error) => {
        console.error('Error fetching tasks', error);
      }
    );
  }

  onDeleteTask(taskId: string) {
    const confirmation = confirm('Are you sure you want to remove this task?');
    if (confirmation) {
      this.taskService.deleteTask(taskId).subscribe(
        () => {
          this.loadTasks(); // Reload tasks after deletion
        },
        (error) => {
          console.error('Error deleting task', error);
        }
      );
    }
  }
}
