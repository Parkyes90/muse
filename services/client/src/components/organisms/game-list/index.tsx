import { TableContainer, useTheme, Pagination } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { Column } from "react-table";
import { useNavigate } from "react-router-dom";
import { requestFetchGames } from "../../../apis/requests";
import { GameListItem, PaginationResponse } from "../../../apis/types";
import MaterialTableFactory from "../material-table";

const columns: ReadonlyArray<Column<GameListItem>> = [
  {
    Header: "게임",
    accessor: "title",
  },
  {
    Header: "설명",
    accessor: "description",
  },
];

const GameList: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery<
    PaginationResponse<GameListItem>,
    AxiosError
  >(`game-list-${page}`, () => requestFetchGames(page));
  const MaterialTable = MaterialTableFactory<GameListItem>();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer
      sx={{
        mt: 3,
        p: 3,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        border: `${theme.spacing(1 / 8)} solid ${grey[300]}`,
      }}
    >
      <MaterialTable
        data={data.results}
        columns={columns}
        onRowClick={(row) => {
          navigate(`/games/${row.original.id}`);
        }}
      />
      <Pagination
        count={data.totalPages}
        page={page}
        onChange={(e, newPage) => setPage(newPage)}
        color="primary"
        hideNextButton={!data.next}
        hidePrevButton={!data.previous}
        sx={{
          mt: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </TableContainer>
  );
};

export default GameList;
