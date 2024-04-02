import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createLink as createLinkApi } from "../../../services/apiLinks";

export function useCreateLink() {
  const queryClient = useQueryClient();
  const { isPending: isCreatingLink, mutate: createLink } = useMutation({
    mutationFn: createLinkApi,
    onSuccess: () => {
      toast.success("Link has been created successfully");
      queryClient.invalidateQueries(["links"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    isCreatingLink,
    createLink,
  };
}
