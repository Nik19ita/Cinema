import { FC, useEffect } from "react";
import { useAppDispatch } from "../../../hooks/ReduxHook";
import { changeModal, isOpenModal } from "../../../store/slice";
import Loader from "../../Waiting/Loader/Loader";
import "./ButtonEnter.scss";

interface IButtonEnterProps {
  type?: "succes" | "login" | "login-form";
  isPending?: boolean;
  isSuccess?: boolean;
  text: string;
}

const ButtonEnter: FC<IButtonEnterProps> = ({
  type,
  isPending,
  isSuccess,
  text,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess && type === "succes") {
      dispatch(changeModal("succes"));
      return;
    }

    if (isSuccess && type === "login") {
      dispatch(isOpenModal(false));
      return;
    }
  }, [dispatch, isSuccess, type]);

  return (
    <>
      <button className="button-purple button-enter">
        {isPending ? <Loader /> : text}
      </button>
    </>
  );
};

export default ButtonEnter;
