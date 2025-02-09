import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { SignInRequest, SignInResponse } from '../types/auth';
import { getStorageItem } from '../utils/local-storage.util';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSignal = signal<string | null>(getStorageItem('token'));
  private isLoggedInSignal = signal<boolean>(!!getStorageItem('token'));

  private router = inject(Router);
  private http = inject(HttpClient);

  login(singInBody: SignInRequest) {
    const apiUrl: string = `${environment.API_URL}/auth/login`;
    return this.http.post<SignInResponse>(apiUrl, singInBody).pipe(
      tap((response: SignInResponse) => {
        // console.log(response);
        localStorage.setItem('authToken', response.token);
        // this.tokenSubject.next(response.token);
        // this.isLoggedInSignal.set(true);
        // this.router.navigate(['/home']);
      }),
      catchError((error) => {
        console.error('Login failed', error);
        return of(null);
      })
    );
  }

  constructor() {}
}
