import { useCallback } from "react";
import { changeAlertMessage, changeLikeView } from "../store/slice";
import useMutateDeleteFavorites from "./MutateDeleteFavorites";
import useMutateFavoritesFilm from "./MutateFavoritesFilm";
import useQueryProfile from "./QueryProfile";
import { useAppDispatch, useAppSelector } from "./ReduxHook";

const useOnClickLike = (id: number) => {
  const dispatch = useAppDispatch();
  const likeView = useAppSelector((state) => state.project.likeView);
  const profile = useQueryProfile();
  const addFavoritesFilm = useMutateFavoritesFilm();
  const removeFavoritesFilm = useMutateDeleteFavorites();

  const likeClick = useCallback((): void => {
    if (!profile.isSuccess) {
      dispatch(changeAlertMessage(true));
      setTimeout(() => {
        dispatch(changeAlertMessage(false));
      }, 1000);
    }

    if (likeView === "like") {
      removeFavoritesFilm.mutate(id.toString());
      dispatch(changeLikeView("aslike"));
    }

    if (likeView === "aslike" && profile.isSuccess) {
      addFavoritesFilm.mutate(id.toString());
      dispatch(changeLikeView("like"));
    }
  }, [
    addFavoritesFilm,
    dispatch,
    id,
    likeView,
    profile.isSuccess,
    removeFavoritesFilm,
  ]);

  return { likeClick, addFavoritesFilm, removeFavoritesFilm };
};

export default useOnClickLike;
