import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import {
  Actor,
  ActorDetails,
  Movie,
  MovieDetails,
  ActorsCast,
} from '../../models/actors';
import { environment } from '../../../assets/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ActorServiceService {
  private apiKey = environment.tmdb.apiKey;
  private baseUrl = environment.tmdb.baseUrl;

  constructor(private http: HttpClient) {}

  getPopularActors(page: number = 1): Observable<Actor[] | { error: string }> {
    return this.http
      .get<{ results: Actor[] }>(
        `${this.baseUrl}/person/popular?api_key=${this.apiKey}&page=${page}`
      )
      .pipe(
        map((res) =>
          res.results.filter(
            (person: Actor) => person.known_for_department === 'Acting'
          )
        ),
        catchError((error) => {
          return of({
            error: 'Could not load actors. Please try again later.',
          });
        })
      );
  }
  getActorById(id: number): Observable<ActorDetails | { error: string }> {
    return this.http
      .get<ActorDetails>(`${this.baseUrl}/person/${id}?api_key=${this.apiKey}`)
      .pipe(
        catchError((error) => {
          return of({ error: 'Could not load actor details.' });
        })
      );
  }

  getPopularMovies(page: number = 1): Observable<Movie[] | { error: string }> {
    return this.http
      .get<{ results: Movie[] }>(
        `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
      )
      .pipe(
        map((res) => res.results),
        catchError(() => {
          return of({
            error: 'Could not load movies. Please try again later.',
          });
        })
      );
  }

  getMovieDetails(
    movieId: number
  ): Observable<MovieDetails | { error: string }> {
    return this.http
      .get<MovieDetails>(
        `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`
      )
      .pipe(catchError(() => of({ error: 'Could not load movie details.' })));
  }

  getMovieCast(movieId: number): Observable<ActorsCast[] | { error: string }> {
    return this.http
      .get<{ cast: ActorsCast[] }>(
        `${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`
      )
      .pipe(
        map((res) => res.cast),
        catchError(() => of({ error: 'Could not load cast for this movie.' }))
      );
  }
}
