import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export function postFavoritesFilm(id: string): Promise<void> {
  return fetch(`${BASE_URL}/favorites`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then(validateResponse)
    .then(() => undefined);
}
