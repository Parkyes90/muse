import { TableContainer, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { Column } from "react-table";
import { requestFetchGames } from "../../../apis/requests";
import { GameListItem } from "../../../apis/types";
import MaterialTableFactory from "../material-table";

const columns: ReadonlyArray<Column> = [
  {
    Header: "게임",
    accessor: "title",
  },
  {
    Header: "설명",
    accessor: "description",
  },
  {
    Header: "참가 인원 수",
    accessor: "count",
  },
];

const GameList: React.FC = () => {
  const theme = useTheme();
  const { data, isLoading, error } = useQuery<GameListItem[], AxiosError>(
    "game-list",
    requestFetchGames,
  );
  const MaterialTable = MaterialTableFactory();

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <TableContainer
      sx={{
        mt: 3,
        p: 3,
        border: `${theme.spacing(1 / 8)} solid ${grey[300]}`,
      }}
    >
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <MaterialTable data={data!} columns={columns} />
      )}
    </TableContainer>
  );
};

export default GameList;
