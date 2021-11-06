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

const GamesList = () => {
  const theme = useTheme();
  return (
    <TableContainer
      sx={{
        marginTop: theme.typography.pxToRem(24),
        padding: theme.typography.pxToRem(24),
        border: `${theme.typography.pxToRem(1)} solid ${grey[300]}`,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>게임</TableCell>
            <TableCell>참가 인원 수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>추억의 투니버스 노래 맞추기</TableCell>
            <TableCell>20</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GamesList;
