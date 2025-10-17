import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private TOKEN_KEY = 'auth_token';
  private USER_KEY = 'user_data';

  constructor(private router: Router) {}

  // Simula registro: guarda usuario en localStorage
  register(email: string, password: string): Observable<boolean> {
    const user = { email, password };
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    const success = true;
    return of(success);
  }

  // Simula login: verifica usuario y genera token
  login(email: string, password: string): boolean {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (!userStr) return false;

    const user = JSON.parse(userStr);
    if (user.email === email && user.password === password) {
      const fakeToken = 'token-' + Math.random().toString(36).substring(2);
      localStorage.setItem(this.TOKEN_KEY, fakeToken);
      return true;
    }
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }
}
