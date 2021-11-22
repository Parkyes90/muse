import axios, { AxiosResponse } from "axios";
import { GameListItem, GameDetail, PaginationResponse } from "./types";

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

export const requestFetchGames = async (
  page: number,
): Promise<PaginationResponse<GameListItem>> => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      page,
    },
  });
  return data;
};

export const requestFetchGame = async (id: number): Promise<GameDetail> => {
  const { data } = await axios.get(`${BASE_URL}${id}/`);
  return data;
};
