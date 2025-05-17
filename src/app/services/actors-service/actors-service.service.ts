import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { Actor, ActorDetails } from '../../models/actors';

@Injectable({
  providedIn: 'root',
})
export class ActorServiceService {
  private apiKey = '6feffdf1325dd81330370b8a8ddb4c06';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getInitData(page: number = 1): Observable<any[]> {
    return this.http.get<any>(
      `${this.baseUrl}/person/popular?api_key=${this.apiKey}&page=${page}`
    );
  }
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
}
