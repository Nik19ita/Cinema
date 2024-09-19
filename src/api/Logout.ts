import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export function logout(): Promise<Response> {
  return fetch(`${BASE_URL}/auth/logout`, {
    credentials: "include",
  })
    .then(validateResponse)
    .then((response) => response.json());
}
