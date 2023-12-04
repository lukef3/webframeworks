// register-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {
  private apiUrl = 'http://localhost:3000/api/register'; // Your API endpoint

  constructor(private http: HttpClient) { }

  registerUser(user: { email: string; password: string }): Promise<any> {
    return this.http.post(this.apiUrl, user).toPromise();
  }
}
