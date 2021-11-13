// post - create
// patch - update
// delete - delete
// get - fetch

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
