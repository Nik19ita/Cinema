import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHook";
import { useWhenOpenModal } from "../../../hooks/UseWhenOpenModal";
import { isOpenModal } from "../../../store/slice";
import { AuthForm } from "../../Popup/AuthForm/AuthForm";
import "./ButtonLogin.scss";
import { createPortal } from "react-dom";

interface IButtonLoginProps {
  className?: string;
}

export const ButtonLogin: FC<IButtonLoginProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const openModal = useAppSelector((state) => state.project.modal.open);
  const rootElement = document.getElementById("modal-root")!;
  useWhenOpenModal(openModal);

  return (
    <>
      <button
        className={`button-login ${className}`}
        onClick={() => dispatch(isOpenModal(true))}
      >
        Войти
      </button>
      {createPortal(<AuthForm openPopup={openModal} />, rootElement)}
    </>
  );
};
