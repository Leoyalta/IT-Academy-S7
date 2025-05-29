import { Routes } from '@angular/router';
import { AuthGuard } from './guards/authGuard';

import { WelcomeComponent } from './сomponents/welcome/welcome.component';
import { NotFoundPageComponent } from './сomponents/not-found-page/not-found-page.component';
import { ActorsListComponent } from './сomponents/actors-list/actors-list.component';
import { ActorProfileComponent } from './сomponents/actor-profile/actor-profile.component';
import { MovieListComponent } from './сomponents/movie-list/movie-list.component';
import { MovieDetailsComponent } from './сomponents/movie-details/movie-details.component';
import { LoginComponent } from './сomponents/login/login.component';
import { RegisterComponent } from './сomponents/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },

  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'moviesList',
    component: MovieListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'actorsList',
    component: ActorsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'actors/:id',
    component: ActorProfileComponent,
    canActivate: [AuthGuard],
  },

  { path: '**', component: NotFoundPageComponent },
];
