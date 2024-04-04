import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProjects } from "../../../services/apiProjects";

export function useProjects() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("type") || "all";

  const {
    data: projects = [],
    isPending: isLoadingProjects,
    isFetching: isFetchingProject,
    isPaused,
  } = useQuery({
    queryKey: ["projects", filter],
    queryFn: () => getProjects(filter),
  });

  return { projects, isLoadingProjects, isFetchingProject, isPaused };
}
