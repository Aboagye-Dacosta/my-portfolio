import { useQuery } from "@tanstack/react-query";
import { getStrings } from "../../../services/stringsApi";

export function useStrings() {
  const {
    data: strings = {},
    isPending: isLoadingStrings,
    isFetching: isFetchingStrings,
  } = useQuery({
    queryKey: ["strings"],
    queryFn: getStrings,
  });

  return { strings, isLoadingStrings, isFetchingStrings };
}
