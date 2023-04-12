import movies from './data/movies.json';

export const AVATAR_URL = 'https://i.pravatar.cc/200?img=11';
export const LATEST_MOVIES = [movies[0], movies[1]];
export const FAVORITE_MOVIES = [movies[2], movies[3]];

export type MovieData = (typeof movies)[0];
export interface RootParamList {
  [key: string]: MovieData | undefined;
  Home: undefined;
  Detail: MovieData;
  Ticket: MovieData;
}

type SeatStatus = 'available' | 'booked' | 'selected';
export interface SeatType {
  status: SeatStatus;
}

export type SeatConfigType = Array<Array<SeatType>>;

export const SeatConfig: SeatConfigType = [
  [
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
  ],
  [
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
  ],
  [
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
  ],
  [
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
  ],
  [
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
  ],
  [
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
  ],
  [
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
    {status: 'available'},
  ],
];
