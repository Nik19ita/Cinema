import { FC } from "react";
import useQueryFavoritesFilms from "../../../hooks/QueryFavoritesFilms";
import useOnClickLike from "../../../hooks/UseClickLike";
import LikeViewType from "../LikeViewType/LikeViewType";
import "./ButtonLike.scss";

interface IButtonLikeView {
  id: number;
}

const ButtonLike: FC<IButtonLikeView> = ({ id }) => {
  const { likeClick, addFavoritesFilm, removeFavoritesFilm } =
    useOnClickLike(id);

  const { data, isSuccess, isError, isFetching } = useQueryFavoritesFilms(id);

  const spinnerAndDisabled =
    addFavoritesFilm.isPending || isFetching || removeFavoritesFilm.isPending;

  return (
    <button
      className="button-like"
      onClick={likeClick}
      disabled={spinnerAndDisabled}
    >
      <LikeViewType
        id={id}
        data={data}
        isError={isError}
        isSuccess={isSuccess}
        spinner={spinnerAndDisabled}
      />
    </button>
  );
};

export default ButtonLike;
