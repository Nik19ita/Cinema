import ILoginProps from "../type/Login";
import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export function login({ email, password }: ILoginProps): Promise<Response> {
  return fetch(`${BASE_URL}/auth/login`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(validateResponse);
}
