import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ActorServiceService } from '../../services/actors-service/actors-service.service';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  const mockActorService = {
    getPopularMovies: jasmine
      .createSpy('getPopularMovies')
      .and.returnValue(of([])),
    getMovieDetails: jasmine
      .createSpy('getMovieDetails')
      .and.returnValue(of({})),
    getMovieCast: jasmine.createSpy('getMovieCast').and.returnValue(of([])),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActorServiceService, useValue: mockActorService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
