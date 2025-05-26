import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorServiceService } from '../../services/actors-service/actors-service.service';
import { MovieDetails } from '../../models/actors';
import { CastComponent } from '../cast/cast.component';

@Component({
  selector: 'app-movie-details',
  imports: [CastComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent implements OnInit {
  movieId: string | null = null;
  movie: MovieDetails | null = null;
  errorMessage: string | null = null;
  showCast: boolean = false;

  constructor(
    protected route: ActivatedRoute,
    private actorService: ActorServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = params.get('id');
      if (this.movieId) {
        this.loadMovie(+this.movieId);
      }
    });
  }
  loadMovie(id: number): void {
    this.actorService.getMovieDetails(id).subscribe((data) => {
      if ('error' in data) {
        this.errorMessage = data.error;
      } else {
        this.movie = data;
      }
    });
  }
}
