import { Component, OnInit } from '@angular/core';
import { ActorServiceService } from '../../services/actors-service/actors-service.service';
import { ActorsCast } from '../../models/actors';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
@Component({
  selector: 'app-cast',
  imports: [],
  templateUrl: './cast.component.html',
  styleUrl: './cast.component.scss',
})
export class CastComponent implements OnInit {
  movieId: string | null = null;
  cast: ActorsCast[] = [];
  errorMessage: string | null = null;
  loading: boolean = true;
  skelrtonCart: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  constructor(
    protected route: ActivatedRoute,
    private actorService: ActorServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = params.get('id');
      if (this.movieId) {
        this.loadCast(+this.movieId);
      }
    });
  }

  loadCast(id: number): void {
    this.actorService
      .getMovieCast(id)
      .pipe(delay(1500))
      .subscribe((data) => {
        if ('error' in data) {
          this.errorMessage = data.error;
        } else {
          this.cast = data;
          this.loading = false;
        }
      });
  }
}
