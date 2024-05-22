import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { authGuard } from './core/guard/auth.guard';
import { noGuardGuard } from './core/guard/no-guard.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [noGuardGuard],
    loadComponent: () =>
      import('./core/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/main/main_route').then((m) => m.MAIN_ROUTE),
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
