import { useQuery } from "@tanstack/react-query";
import { getFavoritesFilms } from "../api/GetFavoritesFilm";
import { queryClient } from "../api/QueryClient";

const useQueryFavoritesFilms = (id?: number) =>
  useQuery(
    {
      queryFn: () => getFavoritesFilms(),
      queryKey: ["favorites-film", id],
      refetchOnMount: "always",
      retry: 0,
    },
    queryClient,
  );

export default useQueryFavoritesFilms;
