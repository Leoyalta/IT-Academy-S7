import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorServiceService } from '../../services/actors-service/actors-service.service';
import { Router } from '@angular/router';
import { Movie, ActorsCast } from '../../models/actors';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  currentPage: number = 1;
  errorMessage: string | null = null;
  movies: Movie[] = [];
  movie: Movie | null = null;
  cast: ActorsCast[] = [];

  constructor(
    private actorsService: ActorServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPopularMovieList();
  }

  goToMovieProfile(id: number): void {
    this.router.navigate(['/movie', id]);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      this.getPopularMovieList();
    }
  }

  getPopularMovieList() {
    this.actorsService.getPopularMovies(this.currentPage).subscribe((data) => {
      if ('error' in data) {
        this.errorMessage = data.error;
      } else {
        const newActors = data.filter(
          (movie: Movie) =>
            !this.movies.some((existing) => existing.id === movie.id)
        );
        this.movies = [...this.movies, ...newActors];

        this.currentPage++;
        this.errorMessage = null;
      }
    });
  }

  getMovieById(movieId: number) {
    this.actorsService.getMovieDetails(movieId).subscribe((data) => {
      if ('error' in data) {
        this.errorMessage = data.error;
      } else {
        this.movie = data;
      }
    });
  }

  getCast(movieId: number) {
    this.actorsService.getMovieCast(movieId).subscribe((data) => {
      if ('error' in data) {
        this.errorMessage = data.error;
      } else {
        this.cast = data;
      }
    });
  }
}
