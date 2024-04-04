import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateUserEmailAndUsername as updateUserEmailAndUsernameApi } from "../../../services/apiAuth";

export function useUpdateUsernameAndEmail() {
  const queryClient = useQueryClient();
  const {
    mutate: updateUserEmailAndUsername,
    isPending: isUpdatingUsernameAndEmail,
  } = useMutation({
    mutationFn: updateUserEmailAndUsernameApi,
    onSuccess: (data) => {
      queryClient.setQueriesData(["user"], data?.user);
      toast.success("Username and email updated successfully");
    },
  });

  return {
    updateUserEmailAndUsername,
    isUpdatingUsernameAndEmail,
  };
}
