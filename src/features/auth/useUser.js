import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const {
    isPending: isLoadingUser,
    data: user = {},
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  if (error) throw new Error(error.message);

  return {
    isLoadingUser,
    user,
    isValidated: user?.role === "authenticated",
  };
}
