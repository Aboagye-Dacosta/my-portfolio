import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getShowExperiences } from "../../../services/apiProjects";

export function useShowExperience() {
  const queryClient = useQueryClient();
  const { data: showExperiences, isPending: isLoadingShowExperiences } = useQuery({
    queryKey: ["projects", "experiences", "show"],
    queryFn: getShowExperiences,
    initialData: queryClient
      .getQueryData(["experiences"])
      ?.filter?.((project) => project.show),
    initialDataUpdatedAt: queryClient.getQueryState(["experiences"])?.dataUpdatedAt,
  });

  return {
    showExperiences,
    isLoadingShowExperiences,
  };
}
