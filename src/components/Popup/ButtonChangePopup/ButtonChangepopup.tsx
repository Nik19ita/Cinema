import { FC, ReactNode } from "react";
import { useAppDispatch } from "../../../hooks/ReduxHook";
import { changeModal } from "../../../store/slice";

interface IButtonChangePopupProps {
  type: "login" | "register" | "succes";
  child: ReactNode;
}

const ButtonChangePopup: FC<IButtonChangePopupProps> = ({ child, type }) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="button-transparent button-center"
      onClick={() => dispatch(changeModal(type))}
    >
      {child}
    </button>
  );
};

export default ButtonChangePopup;
