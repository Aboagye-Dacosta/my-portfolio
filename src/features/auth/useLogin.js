import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const { isPending: isLoggingInUser, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      queryClient.setQueriesData(["user"], data?.user);
      toast.success("You have successfully logged in");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoggingInUser, login };
}
