import { IFilm } from "../type/Film";
import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export const getGenreFilms = (genre: string | undefined): Promise<IFilm[]> => {
  return fetch(`${BASE_URL}/movie?genre=${genre}`)
    .then(validateResponse)
    .then((response) => response.json());
};
