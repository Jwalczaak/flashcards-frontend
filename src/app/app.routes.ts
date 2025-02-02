import { Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
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
