import { Routes } from '@angular/router';
import { WellcomeComponent } from '../Components/wellcome/wellcome.component';
import { StarShipsListComponent } from '../Components/star-ships-list/star-ships-list.component';
import { StarShipCartComponent } from '../Components/star-ship-cart/star-ship-cart.component';
import { NotFoundPageComponent } from '../Components/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'wellcome', pathMatch: 'full' },
  { path: 'wellcome', component: WellcomeComponent },
  { path: 'starShipsList', component: StarShipsListComponent },
  { path: 'starShip/:id', component: StarShipCartComponent },
  { path: '**', component: NotFoundPageComponent },
];
