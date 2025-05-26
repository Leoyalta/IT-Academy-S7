import { Routes } from '@angular/router';
import { WellcomeComponent } from './сomponents/wellcome/wellcome.component';
import { NotFoundPageComponent } from './сomponents/not-found-page/not-found-page.component';
import { ActorsListComponent } from './сomponents/actors-list/actors-list.component';
import { ActorProfileComponent } from './сomponents/actor-profile/actor-profile.component';
import { MovieListComponent } from './сomponents/movie-list/movie-list.component';
import { MovieDetailsComponent } from './сomponents/movie-details/movie-details.component';
import { LoginComponent } from './сomponents/login/login.component';
import { RegisterComponent } from './сomponents/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'wellcome', pathMatch: 'full' },

  { path: 'wellcome', component: WellcomeComponent },
  { path: 'actorsList', component: ActorsListComponent },
  { path: 'moviesList', component: MovieListComponent },
  { path: 'actors/:id', component: ActorProfileComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NotFoundPageComponent },
];
