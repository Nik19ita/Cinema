import { FC } from "react";
import { Login } from "../LoginForm/LoginForm";
import { Register } from "../RegisterForm/RegisterForm";
import { Succes } from "../SuccesPopup/SuccesPopup";

interface IPopupTypeProps {
  popupType: "login" | "register" | "succes";
}

const PopupType: FC<IPopupTypeProps> = ({ popupType }) => {
  switch (popupType) {
    case "login":
      return <Login />;
    case "register":
      return <Register />;
    case "succes":
      return <Succes />;
  }
};

export default PopupType;
