import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateStrings } from "../../../services/stringsApi";

export function useUpdateAboutMe() {
  const queryClient = useQueryClient();
  const { isPending: isPendingUpdateAboutMe, mutate: updateAboutMe } =
    useMutation({
      mutationFn: updateStrings,
      onSuccess: () => {
        toast.success("Info has updated successfully");
        queryClient.invalidateQueries(["strings"]);
      },
      onError: (err) => toast.error(err.message),
    });

  return {
    isPendingUpdateAboutMe,
    updateAboutMe,
  };
}
