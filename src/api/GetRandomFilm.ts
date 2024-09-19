import { IFilm } from "../type/Film";
import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export const getFilmRandom = (): Promise<IFilm> => {
  return fetch(`${BASE_URL}/movie/random`)
    .then(validateResponse)
    .then((response) => response.json());
};
