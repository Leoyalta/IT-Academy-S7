import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';
import { ActorServiceService } from '../../services/actors-service/actors-service.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MovieDetails } from '../../models/actors';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let actorServiceSpy: jasmine.SpyObj<ActorServiceService>;

  const mockMovie: MovieDetails = {
    id: 1,
    title: 'Test Movie',
    original_title: 'Original Title',
    overview: 'Overview of the movie',
    poster_path: '/poster.jpg',
    backdrop_path: '/backdrop.jpg',
    genre_ids: [1, 2],
    original_language: 'en',
    release_date: '2024-01-01',
    popularity: 99,
    vote_average: 8.5,
    vote_count: 1200,
    adult: false,
    video: false,
  };

  beforeEach(async () => {
    actorServiceSpy = jasmine.createSpyObj('ActorServiceService', [
      'getMovieDetails',
    ]);

    await TestBed.configureTestingModule({
      imports: [MovieDetailsComponent],
      providers: [
        {
          provide: ActorServiceService,
          useValue: actorServiceSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => (key === 'id' ? '1' : null),
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load movie on init', () => {
    actorServiceSpy.getMovieDetails.and.returnValue(of(mockMovie));

    component.ngOnInit();

    expect(actorServiceSpy.getMovieDetails).toHaveBeenCalledWith(1);
  });

  it('should set movie on successful fetch', () => {
    actorServiceSpy.getMovieDetails.and.returnValue(of(mockMovie));

    component.loadMovie(1);

    expect(component.movie).toEqual(mockMovie);
    expect(component.errorMessage).toBeNull();
  });

  it('should set errorMessage on error response', () => {
    const errorResponse = { error: 'Movie not found' };
    actorServiceSpy.getMovieDetails.and.returnValue(of(errorResponse));

    component.loadMovie(1);

    expect(component.movie).toBeNull();
    expect(component.errorMessage).toBe('Movie not found');
  });
});
