// register.component.ts
import { Component } from '@angular/core';
import { RegisterDataService } from '../register-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private registerDataService: RegisterDataService) {}

  async registerUser() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return; // Add proper user feedback here
    }

    const user = {
      email: this.email,
      password: this.password
    };

    try {
      const response = await this.registerDataService.registerUser(user);
      console.log('Registration successful', response);
      // Handle successful registration
    } catch (error) {
      console.error('Registration failed', error);
      // Handle registration errors
    }
  }
}
