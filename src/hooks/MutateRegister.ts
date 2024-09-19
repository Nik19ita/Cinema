import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/QueryClient";
import { registerPost } from "../api/Register";

const useMutationRegister = () =>
  useMutation(
    {
      mutationFn: registerPost,
    },
    queryClient,
  );

export default useMutationRegister;
