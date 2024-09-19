import { useQuery } from "@tanstack/react-query";
import { getFilm } from "../api/GetFilm";
import { getFilmRandom } from "../api/GetRandomFilm";
import { queryClient } from "../api/QueryClient";

const useQueryFilm = (id: number | undefined) => {
  return useQuery(
    {
      queryFn: () => {
        return id ? getFilm(id) : getFilmRandom();
      },
      queryKey: [`get-film${id}`],
      refetchOnMount: false,
    },
    queryClient,
  );
};

export default useQueryFilm;
