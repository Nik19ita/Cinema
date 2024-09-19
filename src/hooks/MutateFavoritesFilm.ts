import { useMutation } from "@tanstack/react-query";
import { postFavoritesFilm } from "../api/PostFavoritesFilm";
import { queryClient } from "../api/QueryClient";

const useMutateFavoritesFilm = () =>
  useMutation(
    {
      mutationFn: postFavoritesFilm,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["favorites-film"] });
      },
    },
    queryClient,
  );

export default useMutateFavoritesFilm;
