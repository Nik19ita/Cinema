import { useQuery } from "@tanstack/react-query";
import { getFilmsSearch } from "../api/GetFilmsSearch";
import { queryClient } from "../api/QueryClient";

const useQueryFilmsSearch = (search: string) =>
  useQuery(
    {
      queryFn: () => getFilmsSearch(search),
      queryKey: [search],
    },
    queryClient,
  );

export default useQueryFilmsSearch;
