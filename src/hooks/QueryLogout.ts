import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/Logout";
import { queryClient } from "../api/QueryClient";

const useQueryLogout = (logotRequest: boolean) => {
  const navigate = useNavigate();
  const logoutQuery = useQuery(
    {
      queryFn: () =>
        logout().finally(() => {
          navigate("/");
        }),
      queryKey: ["logout"],
      enabled: logotRequest,
    },
    queryClient,
  );

  return logoutQuery;
};

export default useQueryLogout;
