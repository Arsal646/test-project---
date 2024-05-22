import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  http = inject(HttpClient);

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login(form: User): Observable<any> {
    const api = 'https://crmstg.avluae.com/api/login/';

    return this.http.post(api, form);
  }

  getBooking(): Observable<any> {
    const api = 'https://crmstg.avluae.com/api/booking/';
    return this.http.get(api);
  }
}
