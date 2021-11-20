// post - create
// patch - update
// delete - delete
// get - fetch

export interface PaginationResponse<T> {
  count: number;
  next: null | string;
  previous: null | string;
  totalPages: number;
  results: T[];
}

export interface GameListItem {
  id: number;
  title: string;
  description: string;
}

export interface GameDetail extends GameListItem {
  id: number;
  title: string;
  description: string;
  gameFiles: [
    {
      title: string;
      file: string;
      game: number;
    },
  ];
}
