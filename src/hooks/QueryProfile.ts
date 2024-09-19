import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/GetProfile";
import { queryClient } from "../api/QueryClient";

const useQueryProfile = () =>
  useQuery(
    {
      queryFn: () => getProfile(),
      queryKey: ["profile"],
      retry: 0,
    },
    queryClient,
  );

export default useQueryProfile;
