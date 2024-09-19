import { IFilm } from "../type/Film";
import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export const getFilm = (id: number): Promise<IFilm> => {
  return fetch(`${BASE_URL}/movie/${id}`)
    .then(validateResponse)
    .then((response) => response.json());
};
