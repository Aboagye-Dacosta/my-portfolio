import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getExperiences } from "../../../services/apiProjects";

export function useExperiences() {
  const queryClient = useQueryClient();

  const {
    data: experiences = [],
    isPending: isLoadingExperiences,
    isFetching: isFetchingExperiences,
  } = useQuery({
    queryKey: ["experiences"],
    queryFn: getExperiences,
    initialData: queryClient
      .getQueriesData(["projects"])
      ?.filter(
        (project) => String(project.type).toLowerCase() === "experience"
      ),
    initialDataUpdatedAt: queryClient.getQueryState(["projects"])
      ?.dataUpdatedAt,
  });

  return { experiences, isLoadingExperiences, isFetchingExperiences };
}
