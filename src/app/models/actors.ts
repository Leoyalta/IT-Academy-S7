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
