import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteLink as deleteLinkApi } from "../../../services/apiLinks";

export function useDeleteLink() {
  const queryClient = useQueryClient();
  const { isPending: isDeletingLink, mutate: deleteLink } = useMutation({
    mutationFn: deleteLinkApi,
    onSuccess: () => {
      toast.success("Link has been deleted successfully");
      queryClient.invalidateQueries(["links"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    isDeletingLink,
    deleteLink,
  };
}
