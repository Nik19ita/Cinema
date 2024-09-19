import { IFilm } from "../type/Film";
import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export const getFavoritesFilms = (): Promise<IFilm[]> => {
  return fetch(`${BASE_URL}/favorites`, {
    credentials: "include",
  })
    .then(validateResponse)
    .then((response) => response.json());
};
