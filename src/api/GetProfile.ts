import { IProfile } from "../type/Profile";
import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export function getProfile(): Promise<IProfile> {
  return fetch(`${BASE_URL}/profile`, {
    credentials: "include",
  })
    .then(validateResponse)
    .then((response) => response.json());
}
