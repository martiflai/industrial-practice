import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    const success = this.auth.login(this.email, this.password);
    if (success) {
      window.location.href = '/catalog';
    } else {
      this.error = 'Wrong email or password';
    }
  }
}
