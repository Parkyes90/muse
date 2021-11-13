import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { requestFetchGames } from "../../../apis/requests";
import { GameListItem } from "../../../apis/types";

const GameList: React.FC = () => {
  const theme = useTheme();
  const { data, isLoading, error } = useQuery<GameListItem[], AxiosError>(
    "game-list",
    requestFetchGames,
  );

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>게임</TableCell>
              <TableCell>설명</TableCell>
              <TableCell>참가 인원 수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((datum) => {
              return (
                <TableRow
                  key={datum.id}
                  sx={{
                    cursor: "pointer",
                    ":hover": {
                      bgcolor: grey[300],
                    },
                  }}
                >
                  <TableCell>{datum.title}</TableCell>
                  <TableCell>{datum.description}</TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default GameList;
