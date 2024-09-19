import IRegister from "../type/Register";
import { BASE_URL } from "./Config";
import { validateResponse } from "./ValidateResponse";

export function registerPost({
  email,
  password,
  name,
  surname,
}: IRegister): Promise<void> {
  return fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, surname }),
  })
    .then(validateResponse)
    .then(() => undefined);
}
