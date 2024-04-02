import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getShowRegular } from "../../../services/apiProjects";

export function useShowRegularProjects() {
  const queryClient = useQueryClient();
  const { data: showRegulars, isPending: isLoadingShowRegulars } = useQuery({
    queryKey: ["projects", "regular", "show"],
    queryFn: getShowRegular,
    initialData: queryClient
      .getQueryData(["regular"])
      ?.filter?.((project) => project.show),
    initialDataUpdatedAt: queryClient.getQueryState(["regular"])?.dataUpdatedAt,
  });

  return {
    showRegulars,
    isLoadingShowRegulars,
  };
}
