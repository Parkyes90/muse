// post - create
// patch - update
// delete - delete
// get - fetch

export interface CreateGameResponse {
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
