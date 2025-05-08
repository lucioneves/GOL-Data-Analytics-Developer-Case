import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthTokenService } from '../services/auth-token.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthTokenService);
  const token = AuthTokenService.getToken();

  const clonedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(clonedReq);
};
