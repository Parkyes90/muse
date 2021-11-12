import axios, { AxiosResponse } from "axios";
import { CreateGameResponse } from "./types";

const BASE_URL = "/api/games/";

export const requestCreateGame = async (
  payload: FormData,
): Promise<AxiosResponse<CreateGameResponse>> => {
  return axios.post(BASE_URL, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
