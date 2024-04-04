import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateUserPassword } from "../../../services/apiAuth";

export function useUpdatePassword() {
  const { mutate: updatePassword, isPending: isUpdatingPassword } = useMutation(
    {
      mutationFn: updateUserPassword,
      onSuccess: () => {
        toast.success("Password updated successfully");
      },
      onError: (err) => toast.error(err.message),
    }
  );

  return {
    updatePassword,
    isUpdatingPassword,
  };
}
