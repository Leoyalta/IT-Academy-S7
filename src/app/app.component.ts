import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavListComponent } from './сomponents/nav-list/nav-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'movies-app';
}
