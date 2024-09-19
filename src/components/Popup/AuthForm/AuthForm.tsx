import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import Logo from "../../../assets/img/cinema.svg?react";
import { useAppSelector } from "../../../hooks/ReduxHook";
import Close from "../ClosePopup/ClosePopup";
import PopupType from "../PopupType/PopupType";
import "./AuthForm.scss";

interface IAuthForm {
  openPopup: boolean;
}

const AuthForm: FC<IAuthForm> = ({ openPopup }) => {
  const popupType = useAppSelector((state) => state.project.modal.typeModal);

  return (
    <AnimatePresence>
      {openPopup && (
        <motion.div
          className="popup"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <div className="popup__container">
            <motion.div
              className="popup__content"
              key="popup"
              transition={{ duration: 1, ease: "linear" }}
            >
              <Logo className="popup__logo" />
              <Close />
              <PopupType popupType={popupType} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthForm;
