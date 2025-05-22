export interface KnownForItem {
  id: number;
  title?: string;
  name?: string;
  media_type: 'movie' | 'tv';
  backdrop_path?: string;
  overview?: string;
}

export interface Actor {
  id: number;
  name: string;
  profile_path?: string;
  known_for_department?: string;
  known_for?: KnownForItem[];
}

export interface ActorDetails {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}
export interface MovieDetails {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  video: boolean;
}
export interface ActorsCast {
  id: number;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
  popularity: number;
  character: string;
  credit_id: string;
  cast_id: number;
  order: number;
  adult: boolean;
  known_for_department: string;
}
