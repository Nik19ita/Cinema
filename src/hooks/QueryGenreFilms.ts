import { useQuery } from "@tanstack/react-query";
import { getGenreFilms } from "../api/GetGenre";
import { queryClient } from "../api/QueryClient";

const useQueryGenreFilms = (genre: string | undefined) =>
  useQuery(
    {
      queryFn: () => getGenreFilms(genre),
      queryKey: [genre],
    },
    queryClient,
  );

export default useQueryGenreFilms;
