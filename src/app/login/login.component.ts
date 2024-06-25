// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  role: string = 'user'; // Default role

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.authenticate(this.email, this.password, this.role).subscribe(result => {
      if (result === 'invalid') {
        alert('Invalid credentials. Please enter correct information.');
      } else {
        this.router.navigate([`/${this.role}`]);
      }
    });
  }
}
