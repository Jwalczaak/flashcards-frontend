import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { SignInRequest, SignInResponse } from '../types/auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);
  private router = inject(Router);

  private storedToken = signal<string | null>(this.getTokenFromStorage());

  private loading = signal<boolean>(true);

  tokenSignal = computed(() => this.storedToken());
  readonly isLoggedInSignal = computed(() => !!this.tokenSignal());

  constructor() {
    effect(() => {
      if (this.storedToken() !== null) {
        this.loading.set(false);
      }
    });
  }

  private getTokenFromStorage(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  login(signInBody: SignInRequest): Observable<SignInResponse | null> {
    const apiUrl: string = `${environment.API_URL}/auth/login`;
    return this.http.post<SignInResponse>(apiUrl, signInBody).pipe(
      tap((response: SignInResponse) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', response.token);
        }
        this.storedToken.set(response.token); // Update token reactively
        this.router.navigate(['/home'], { replaceUrl: true });
      })
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.storedToken.set(null); // Reactively set token to null
    this.router.navigate(['/auth'], { replaceUrl: true });
  }

  isLoading(): boolean {
    return this.loading();
  }
}
