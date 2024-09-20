import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import useQueryFavoritesFilms from "../../../hooks/QueryFavoritesFilms";
import { useAppSelector } from "../../../hooks/ReduxHook";
import useOnClickLike from "../../../hooks/UseClickLike";
import LikeViewType from "../../Common/LikeViewType/LikeViewType";
import "./ButtonLike.scss";

interface IButtonLikeView {
  id: number;
}

const ButtonLike: FC<IButtonLikeView> = ({ id }) => {
  const alertMessage = useAppSelector((state) => state.project.alertMessege);

  const { likeClick, addFavoritesFilm, removeFavoritesFilm } =
    useOnClickLike(id);

  const { data, isSuccess, isError, isFetching } = useQueryFavoritesFilms(id);

  const spinnerAndDisabled =
    addFavoritesFilm.isPending || isFetching || removeFavoritesFilm.isPending;

  return (
    <div className="button-like">
      <button
        className="button-like__button"
        onClick={likeClick}
        disabled={spinnerAndDisabled || alertMessage}
      >
        <LikeViewType
          id={id}
          data={data}
          isError={isError}
          isSuccess={isSuccess}
          spinner={spinnerAndDisabled}
        />
      </button>

      <AnimatePresence>
        {alertMessage && (
          <motion.div
            className="button-like__alert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
          >
            Войдите в профиль
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonLike;
