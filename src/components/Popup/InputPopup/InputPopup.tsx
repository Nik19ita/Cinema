import { Dispatch, FC, useState } from "react";
import { UseFormClearErrors, UseFormRegister } from "react-hook-form";
import fnPlaceholderText from "../../../helpers/GetPlaceholderText";
import typeInput from "../../../type/InputType";
import InputPopupType from "../InputPopupType/InputPopupType";
import "./InputPopup.scss";

interface IInputPopupProps {
  type: typeInput;
  error?: string;
  setChangeInput: Dispatch<React.SetStateAction<boolean>>;
  changeInput: UseFormClearErrors<{
    email: string;
    password: string;
    passwordConfirm?: string;
    name?: string;
    surname?: string;
  }>;
  register:
    | UseFormRegister<{
        email: string;
        password: string;
        passwordConfirm?: string;
        name?: string;
        surname?: string;
      }>
    | UseFormRegister<{
        email: string;
        password: string;
        passwordConfirm: string;
        name: string;
        surname: string;
      }>;
}

const InputPopup: FC<IInputPopupProps> = ({
  type,
  error,
  register,
  changeInput,
  setChangeInput,
}) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  return (
    <div className="input-popup-block">
      <input
        className={`input-popup input-popup_${type} ${value && "value"} ${error && "error"} ${focus && !value && "focus"}`}
        type="text"
        placeholder={fnPlaceholderText(type)}
        value={value}
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        {...register(type)}
        onChange={(e) => {
          changeInput(type);
          setValue(e.target.value);
          setChangeInput(false);
        }}
      />
      <InputPopupType type={type} />
    </div>
  );
};

export default InputPopup;
