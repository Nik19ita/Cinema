import { useAppDispatch } from "../../../hooks/ReduxHook";
import { changeModal } from "../../../store/slice";
import "./SuccesPopup.scss";

export const Succes = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="succes">
      <h2 className="succes__h2">Регистрация завершена</h2>

      <p className="succes__p">Используйте вашу электронную почту для входа</p>

      <button
        className="button-purple button-center"
        onClick={() => dispatch(changeModal("login"))}
      >
        Войти
      </button>
    </div>
  );
};
