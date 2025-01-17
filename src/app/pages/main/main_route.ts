import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const MAIN_ROUTE: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
    ],
  },
];
