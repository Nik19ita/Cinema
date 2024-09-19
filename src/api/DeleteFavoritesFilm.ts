import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export function deleteFavoritesFilm(id: string): Promise<Response> {
  return fetch(`${BASE_URL}/favorites/${id}`, {
    credentials: "include",
    method: "DELETE",
  }).then(validateResponse);
}
