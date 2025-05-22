import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wellcome',
  imports: [CommonModule],
  templateUrl: './wellcome.component.html',
  styleUrl: './wellcome.component.scss',
})
export class WellcomeComponent {
  constructor(private router: Router) {}
  goToActorProfile(): void {
    this.router.navigate(['/actorsList']);
    console.log(123);
  }
}
