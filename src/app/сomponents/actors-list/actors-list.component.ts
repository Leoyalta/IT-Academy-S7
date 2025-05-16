import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorsServiceService } from '../../services/actors-service/actors-service.service';

interface Actor {
  id: number;
  name: string;
  profile_path?: string;
  known_for_department?: string;
}

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
  constructor(private directorsService: DirectorsServiceService) {}
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
    this.directorsService
      .getPopularActors(this.currentPage)
      .subscribe((data) => {
        if (data.error) {
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
}
