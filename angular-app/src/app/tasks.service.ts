// task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './tasks-table/tasks-table.component';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:3000/api/tasks'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getTasks(): Promise<Task[]> {
    return this.http.get(this.apiUrl).toPromise().then(response => response as Task[]).catch(this.handleError);
  }
  
  deleteTask(taskId: string): Promise<any> {
    return this.http.delete(`${this.apiUrl}/${taskId}`).toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
