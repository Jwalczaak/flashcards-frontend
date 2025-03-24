import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const loginGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoading()) {
    return false;
  }

  const isLoggedIn = authService.tokenSignal();

  if (isLoggedIn) {
    return true;
  } else {
    router.navigate(['/auth']);
    return false;
  }
};
