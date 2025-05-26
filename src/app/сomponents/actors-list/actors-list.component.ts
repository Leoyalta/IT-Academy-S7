import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorServiceService } from '../../services/actors-service/actors-service.service';
import { Router } from '@angular/router';
import { Actor } from '../../models/actors';

@Component({
  selector: 'app-actors-list',
  imports: [CommonModule],
  templateUrl: './actors-list.component.html',
  styleUrl: './actors-list.component.scss',
})
export class ActorsListComponent implements OnInit {
  actors: Actor[] = [];
  currentPage: number = 1;
  errorMessage: string | null = null;

  constructor(
    private actorsService: ActorServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMore();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      this.loadMore();
    }
  }

  loadMore(): void {
    this.actorsService.getPopularActors(this.currentPage).subscribe((data) => {
      if ('error' in data) {
        this.errorMessage = data.error;
      } else {
        const newActors = data.filter(
          (actor: Actor) =>
            !this.actors.some((existing) => existing.id === actor.id)
        );
        this.actors = [...this.actors, ...newActors];

        this.currentPage++;
        this.errorMessage = null;
      }
    });
  }

  goToActorProfile(id: number): void {
    this.router.navigate(['/actors', id]);
  }
}
