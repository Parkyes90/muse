import axios, { AxiosResponse } from "axios";
import { GameListItem, GameDetail } from "./types";

const BASE_URL = "/api/games/";

export const requestCreateGame = async (
  payload: FormData,
): Promise<AxiosResponse<GameDetail>> => {
  return axios.post(BASE_URL, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const requestFetchGames = async (): Promise<GameListItem[]> => {
  const { data } = await axios.get(BASE_URL);
  return data;
};
