import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateLink as updateLinkApi } from "../../../services/apiLinks";

export function useUpdateLinks() {
  const queryClient = useQueryClient();
  const { isPending: isUpdatingLink, mutate: updateLink } = useMutation({
    mutationFn: updateLinkApi,
    onSuccess: () => {
      toast.success("Link has updated successfully");
      queryClient.invalidateQueries(["links"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    isUpdatingLink,
    updateLink,
  };
}
