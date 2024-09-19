import CloseSVG from "../../../assets/img/close.svg?react";
import { useAppDispatch } from "../../../hooks/ReduxHook";
import { changeModal, isOpenModal } from "../../../store/slice";
import "./ClosePopup.scss";

const Close = () => {
  const dispatch = useAppDispatch();

  return (
    <CloseSVG
      className="popup-close"
      onClick={() => {
        dispatch(isOpenModal(false));
        dispatch(changeModal("login"));
      }}
    />
  );
};

export default Close;
