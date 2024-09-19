/* eslint-disable react/jsx-curly-brace-presence */
import { FC } from "react";
import typeError from "../../../type/Errors";
import "./ErrorMessage.scss";

interface IErrorMessageProps {
  errors?: typeError;
  isError?: boolean;
  type?: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ errors, isError, type }) => {
  if (errors?.password) {
    return (
      <span className="error-messsage error-errors">
        {errors.password.message}
      </span>
    );
  }

  if (errors?.passwordConfirm && errors.passwordConfirm.type === "custom") {
    return (
      <span className="error-messsage error-errors">
        {errors.passwordConfirm.message}
      </span>
    );
  }

  if (isError && type === "login") {
    return (
      <span className="error-messsage error-isError">
        Неверный логин или пароль
      </span>
    );
  }

  if (isError && type === "register") {
    return (
      <span className="error-messsage error-isError">
        {"Что-то пошло не так :("}
      </span>
    );
  }
};

export default ErrorMessage;
