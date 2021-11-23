import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { Box, Paper, TextField, Typography, useTheme } from "@mui/material";
import { GameDetail } from "../../apis/types";
import { requestFetchGame } from "../../apis/requests";

const GameDetailPage: React.FC = () => {
  const params = useParams<"gameId">();
  const theme = useTheme();
  const { data, isLoading, error } = useQuery<GameDetail, AxiosError>(
    `game-detail-${params.gameId}`,
    () => requestFetchGame(+params!.gameId!),
  );
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isLoading || !data) {
    return <div>Loading...</div>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body1">{data.description}</Typography>
      <Paper
        elevation={1}
        sx={{
          mt: 3,
          width: "100%",
          height: theme.typography.pxToRem(200),
        }}
      >
        힌트
      </Paper>
      <Paper
        elevation={3}
        sx={{
          mt: 3,
          width: "100%",
          height: theme.typography.pxToRem(400),
        }}
      >
        로그
      </Paper>
      <Box sx={{ mt: 3, width: "100%" }}>
        <form>
          <TextField label="노래 제목 입력하기" fullWidth />
        </form>
      </Box>
    </Box>
  );
};

export default GameDetailPage;
