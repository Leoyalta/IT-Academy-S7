import { Routes } from '@angular/router';
import { WellcomeComponent } from './сomponents/wellcome/wellcome.component';
import { NotFoundPageComponent } from './сomponents/not-found-page/not-found-page.component';
import { ActorsListComponent } from './сomponents/actors-list/actors-list.component';
import { ActorProfileComponent } from './сomponents/actor-profile/actor-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'wellcome', pathMatch: 'full' },

  { path: 'wellcome', component: WellcomeComponent },
  { path: 'actorsList', component: ActorsListComponent },
  { path: 'actors/:id', component: ActorProfileComponent },

  { path: '**', component: NotFoundPageComponent },
];
