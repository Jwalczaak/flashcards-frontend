import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const loginGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Wait until the loading state is false (token check is complete)
  if (authService.isLoading()) {
    console.log('Loading...');
    return false; // Block navigation until loading is done
  }

  const isLoggedIn = authService.tokenSignal();

  if (isLoggedIn) {
    console.log('Already logged in');
    return true;
  } else {
    console.log('Not authenticated');
    router.navigate(['/auth']);
    return false;
  }
};
