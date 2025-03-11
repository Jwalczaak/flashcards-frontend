import { Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CategoriesListComponent } from './pages/home/categories-list/categories-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [loginGuard],
    children: [
      {
        path: '',
        component: NavBarComponent, // Load Navbar on Home
        outlet: 'navbar',
      },
      {
        path: 'categories',
        component: CategoriesListComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
