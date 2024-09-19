import { IFilm } from "../type/Film";
import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export const getTopFilms = (): Promise<IFilm[]> => {
  return fetch(`${BASE_URL}/movie/top10`)
    .then(validateResponse)
    .then((response) => response.json());
};
