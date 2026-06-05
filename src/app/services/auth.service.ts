import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register(name: string, email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.find((u: any) => u.email === email);
    if (exists) return false;
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    return JSON.parse(sessionStorage.getItem('currentUser') || 'null');
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }
}
