import { useQuery } from "@tanstack/react-query";
import { getTopFilms } from "../api/GetTopFilms";
import { queryClient } from "../api/QueryClient";

const useQueryTopFilms = () =>
  useQuery(
    {
      queryFn: getTopFilms,
      queryKey: ["get-top-films"],
      refetchOnMount: false,
    },
    queryClient,
  );

export default useQueryTopFilms;
