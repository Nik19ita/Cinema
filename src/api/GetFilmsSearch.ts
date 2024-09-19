import { IFilm } from "../type/Film";
import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export const getFilmsSearch = (search: string): Promise<IFilm[]> => {
  return fetch(`${BASE_URL}/movie?title=${search}`)
    .then(validateResponse)
    .then((response) => response.json());
};
