import { useMutation } from "@tanstack/react-query";
import { login } from "../api/Login";
import { queryClient } from "../api/QueryClient";
import { isOpenModal } from "../store/slice";
import { useAppDispatch } from "./ReduxHook";

const useMutationLogin = () => {
  const dispatch = useAppDispatch();
  return useMutation(
    {
      mutationFn: login,
      onSuccess() {
        queryClient
          .invalidateQueries({ queryKey: ["profile"] })
          .finally(() => dispatch(isOpenModal(false)));
      },
    },
    queryClient,
  );
};

export default useMutationLogin;
