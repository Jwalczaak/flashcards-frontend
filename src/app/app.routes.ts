import { Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomeComponent } from './pages/home/home.component';
import { loginGuard } from './shared/guards/login.guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [loginGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

// TO implements later
// {
//     path: 'courses/:courseId',
//     component: CourseComponent,
//     canActivate: [isUserAuthenticated],
//     resolve: {
//       course: courseResolver,
//       lessons: courseLessonsResolver,
//     },
//   },
