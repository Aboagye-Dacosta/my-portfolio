import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRegular } from "../../../services/apiProjects";

export function useRegular() {
  const queryClient = useQueryClient();

  const { data: regular = [], isPending: isLoadingRegular } = useQuery({
    queryKey: ["regular"],
    queryFn: getRegular,
    initialData: queryClient
      .getQueriesData(["projects", "all"])
      ?.filter((project) => String(project.type).toLowerCase() === "regular"),
    initialDataUpdatedAt: queryClient.getQueryState(["projects", "all"])
      ?.dataUpdatedAt,
  });

  return { regular, isLoadingRegular };
}
