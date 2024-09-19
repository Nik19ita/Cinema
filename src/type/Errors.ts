import { FieldErrors } from "react-hook-form";

type typeError = FieldErrors<{
  password: string;
  passwordConfirm: string;
  email: string;
  name: string;
  surname: string;
}>;

export default typeError;
