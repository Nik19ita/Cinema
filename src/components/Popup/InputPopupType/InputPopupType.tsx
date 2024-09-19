import { FC } from "react";
import Email from "../../../assets/img/email.svg?react";
import Name from "../../../assets/img/name.svg?react";
import Password from "../../../assets/img/password.svg?react";
import typeInput from "../../../type/InputType";

interface IInputPopupTypeProps {
  type: typeInput;
}

const InputPopupType: FC<IInputPopupTypeProps> = ({ type }) => {
  switch (type) {
    case "email":
      return <Email />;
    case "name":
      return <Name />;
    case "surname":
      return <Name />;
    case "password":
      return <Password />;
    case "passwordConfirm":
      return <Password />;
  }
};

export default InputPopupType;
