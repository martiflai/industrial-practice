import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  register(name: string, email: string, password: string): boolean {
    if (!this.isBrowser()) return false;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.find((u: any) => u.email === email);
    if (exists) return false;
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    if (!this.isBrowser()) return false;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    if (!this.isBrowser()) return;
    sessionStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    if (!this.isBrowser()) return null;
    return JSON.parse(sessionStorage.getItem('currentUser') || 'null');
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }
}