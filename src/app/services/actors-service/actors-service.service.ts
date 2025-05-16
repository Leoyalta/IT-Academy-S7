import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DirectorsServiceService {
  private apiKey = '6feffdf1325dd81330370b8a8ddb4c06';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getInitData(): Observable<any[]> {
    return this.http.get<any>(
      `${this.baseUrl}/person/popular?api_key=${this.apiKey}`
    );
  }
  getPopularActors(page: number = 1): Observable<any> {
    return this.http
      .get<any>(
        `${this.baseUrl}/person/popular?api_key=${this.apiKey}&page=${page}`
      )
      .pipe(
        map((res) =>
          res.results.filter(
            (person: any) => person.known_for_department === 'Acting'
          )
        ),
        catchError((error) => {
          return of({
            error: 'Could not load actors. Please try again later.',
          });
        })
      );
  }
}
