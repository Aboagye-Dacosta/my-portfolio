import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateAvatar as updateAvatarApi } from "../../../services/apiAuth";

export function useUpdateAvatar() {
  const queryClient = useQueryClient();
  const { mutate: updateAvatar, isPending: isUpdatingAvatar } = useMutation({
    mutationFn: updateAvatarApi,
    onSuccess: (data) => {
      queryClient.setQueriesData(["user"], data?.user);
      toast.success("Avatar updated successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    updateAvatar,
    isUpdatingAvatar,
  };
}
