import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/QueryClient";
import { deleteFavoritesFilm } from "../api/DeleteFavoritesFilm";

const useMutateDeleteFavorites = () =>
  useMutation(
    {
      mutationFn: deleteFavoritesFilm,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["favorites-film"] });
      },
    },
    queryClient,
  );

export default useMutateDeleteFavorites;
