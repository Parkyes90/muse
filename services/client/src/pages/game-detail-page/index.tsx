import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { GameDetail } from "../../apis/types";
import { requestFetchGame } from "../../apis/requests";

const GameDetailPage: React.FC = () => {
  const params = useParams<"gameId">();
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
  return <div>{JSON.stringify(data)}</div>;
};

export default GameDetailPage;
