import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const cloned = req.clone({
    setHeaders: {
      Authorization: 'bearer ' + auth.getToken(),
    },
  });
  return next(cloned);
};
